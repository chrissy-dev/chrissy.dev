---
title:  Install Composer globally on Mac OS
date: 2019-07-15
featured_image: /static/composer.jpg
---

## 1. Download Composer

Install download the composer using the following curl command in your terminal, this is provided by the project itself:

```bash
curl -sS https://getcomposer.org/installer | php
```

After running that command, there will be a file `composer.phar` in the current directory. You could use that command like this:

```bash
php composer.phar install
```

## 2. Installing Globally 

In order to make composer available globally, allowing you to type `composer install` anywhere, you have to move the recently downloaded composer.phar to local user’s bin folder:

```bash
mv composer.phar /usr/local/bin/composer
```


### 3. Open your shell profile 

What shell are you using?

#### Using bash? (Default shell on Mac OS <10.14, 2002-2019)

Open your ` ~/.bash_profile` (in text edit 😏) 

```bash
open -e  ~/.bash_profile
```


#### Using zsh? (Default shell on Mac OS 10.15+, 2019-Present)

Open your ` ~/.zshrc` (in text edit 😏) 

```bash
open -e  ~/.zshrc
```

### 4. Add alias to composer 

Add an alias to point at the `composer.phar` you moved into `/usr/local/bin/*`.

In your `.zshrc` or `.bash_profile` add the following line. It will create an alias of `composer` that can be used globally.

```bash
alias composer="php /usr/local/bin/composer"
```


### 5. Use composer globally

After restarting your terminal you will be able to access composer like below:

```bash
composer install 
```

---

There is a few way to accomplish this but I personally find the alias method the clearest and allows me to fully configure my shell. You could add `/usr/local/bin` to your `PATH`, see [here](https://superuser.com/questions/595818/add-usr-local-sbin-to-the-path-of-a-user).