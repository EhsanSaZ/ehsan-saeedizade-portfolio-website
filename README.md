# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e93d7d9c-5222-47b0-882b-06b40830a509

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Build and Host on Linux with Apache

To deploy your application on a Linux server using Apache, you need to build the project and copy the static files to your web server directory.

### 1. Build the Application

To build the project for production and guarantee the output goes to an `output` directory, run the following command:

```bash
npx vite build --outDir output
```

This will create an `output` directory in your project root containing the optimized HTML, JS, and CSS files. The structure will look something like this:

```text
output/
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
├── vite.svg
└── index.html
```

### 2. Install Apache on Linux (Ubuntu/Debian)

If you haven't installed Apache yet, run the following commands on your Linux server:

```bash
sudo apt update
sudo apt install apache2 -y
```

### 3. Deploy the application

Copy the contents of the newly created `output` directory to your Apache web root directory (default is `/var/www/html/`).

```bash
sudo rsync -av --delete output/ /var/www/html/
```
*(Note: Ensure you are copying the contents inside the folder, hence the trailing slash `output/`)*

### 4. Set Correct Permissions

You must give the Apache web server read permissions for those files:

```bash
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html
```

### 5. Enable and Start Apache

Ensure Apache is running and configured to start on boot:

```bash
sudo systemctl enable apache2
sudo systemctl restart apache2
```

### 6. Address Client-Side Routing (Optional)

If your app uses a client-side router (like React Router), you will need to direct all requests back to `index.html`. 

First, enable the rewrite module:
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

Then, create a `.htaccess` file inside `/var/www/html/` with the following content:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
Make sure `AllowOverride All` is set for your `<Directory /var/www/html>` in your Apache configuration (typically in `/etc/apache2/sites-available/000-default.conf`).
