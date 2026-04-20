<?php
declare(strict_types=1);

require_once __DIR__ . '/auth.php';

tryAutoLoginFromRememberMe();
if (isAuthenticated()) {
    header('Location: dashboard.php');
    exit;
}

$errors = [];
$loginValue = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $csrf = $_POST['csrf_token'] ?? null;
    if (!verifyCsrfToken(is_string($csrf) ? $csrf : null)) {
        $errors[] = 'Invalid request token. Please retry.';
    }

    $loginValue = trim((string)($_POST['login'] ?? ''));
    $password = (string)($_POST['password'] ?? '');
    $rememberMe = isset($_POST['remember_me']);

    if ($loginValue === '') {
        $errors[] = 'Username or email is required.';
    }

    if ($password === '') {
        $errors[] = 'Password is required.';
    }

    if (!$errors) {
        $stmt = db()->prepare(
            'SELECT id, username, email, password_hash FROM users WHERE email = :login OR username = :login LIMIT 1'
        );
        $stmt->execute(['login' => $loginValue]);
        $user = $stmt->fetch();

        if (!$user || !password_verify($password, (string)$user['password_hash'])) {
            $errors[] = 'Invalid credentials.';
        } else {
            loginUser($user, $rememberMe);
            header('Location: dashboard.php');
            exit;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login | EcoCompare</title>
  <link rel="stylesheet" href="./style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body class="auth-page">
  <main class="auth-wrapper">
    <section class="auth-card">
      <h1>Sign In</h1>
      <p>Access your EcoCompare account</p>

      <?php if ($errors): ?>
        <div class="auth-alert">
          <?php foreach ($errors as $error): ?>
            <p><?php echo e($error); ?></p>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>

      <form method="post" class="auth-form" novalidate>
        <input type="hidden" name="csrf_token" value="<?php echo e(csrfToken()); ?>" />

        <label for="login">Username or Email</label>
        <input id="login" name="login" type="text" maxlength="100" required value="<?php echo e($loginValue); ?>" />

        <label for="password">Password</label>
        <input id="password" name="password" type="password" required />

        <label class="remember-line" for="remember_me">
          <input id="remember_me" name="remember_me" type="checkbox" />
          Keep me logged in for 14 days
        </label>

        <button type="submit">Login</button>
      </form>

      <p class="auth-meta">No account yet? <a href="register.php">Create one</a></p>
      <p class="auth-meta"><a href="index.html">View public landing page</a></p>
    </section>
  </main>
</body>
</html>
