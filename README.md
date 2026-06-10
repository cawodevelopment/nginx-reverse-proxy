# Node.js Backend

Node.js backend designed to run behind an NGINX reverse proxy.

## Features

- Node.js backend
- NGINX reverse proxy
- NGINX load balancing
- NGINX rate limiting
- NGINX authentication
- GitHub Actions CI/CD workflow

---

# Ubuntu Setup Guide

## 1. Update the System

```bash
sudo apt update && sudo apt upgrade -y
```

## 2. Install Node.js and npm

```bash
sudo apt install -y nodejs npm
```

Verify installation:

```bash
node -v
npm -v
```

## 3. Install NGINX

```bash
sudo apt install -y nginx
```

Verify installation:

```bash
nginx -v
```

## 4. Clone the Repository

```bash
git clone https://github.com/cawodevelopment/nginx-reverse-proxy.git
```

## 5. Install Dependencies

```bash
npm install
```

## 6. Configure Environment Variables

A template file is included in the repository.

<img width="165" height="193" alt="image" src="https://github.com/user-attachments/assets/6ddaafb5-89cc-4905-ae18-bcb5b2aeff13" />


Copy it to create your local configuration:

```bash
cp .envtemplate .env
```

Edit the `.env` file and update the values for your environment.

## 7. Start the Backend

Run:

```bash
npm run multiple
```

This command starts the backend instances required for NGINX load balancing.

---

# NGINX Configuration

A sample NGINX configuration file is included in this repository.

<img width="635" height="778" alt="image" src="https://github.com/user-attachments/assets/b79f1c86-cd99-4c67-90dd-0307635782ba" />

Copy the configuration file to NGINX's sites-available directory:

```bash
sudo cp node-example /etc/nginx/sites-available/node-example
```

Enable the site by creating a symbolic link:

```bash
sudo ln -s /etc/nginx/sites-available/node-example /etc/nginx/sites-enabled/node-example
```

Test the configuration:

```bash
sudo nginx -t
```

If the test passes, reload NGINX:

```bash
sudo systemctl reload nginx

# GitHub Actions

This repository includes a GitHub Actions workflow located in:

```text
.github/workflows/
```

---

The workflow can be used to automate:

- Testing
- Linting

Review the workflow configuration for implementation details.

<img width="345" height="536" alt="image" src="https://github.com/user-attachments/assets/f4fcec8c-2585-443d-a474-e2a105b29802" />
