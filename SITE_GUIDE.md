# Frantz Lab Website — Complete Maintenance Guide

**Written for:** Anyone who needs to keep this site running, with zero prior experience.

---

## Table of Contents

1. [What is this website, exactly?](#1-what-is-this-website-exactly)
2. [The big picture — how it all fits together](#2-the-big-picture--how-it-all-fits-together)
3. [Accounts you need access to](#3-accounts-you-need-access-to)
4. [Software to install on your computer](#4-software-to-install-on-your-computer)
5. [Getting the website files onto your computer](#5-getting-the-website-files-onto-your-computer)
6. [Common tasks — step by step](#6-common-tasks--step-by-step)
   - [Add a new lab member](#task-a-add-a-new-lab-member)
   - [Remove a lab member who left](#task-b-remove-a-lab-member-who-left)
   - [Add a new publication](#task-c-add-a-new-publication)
   - [Add photos to the Group Life section](#task-d-add-photos-to-the-group-life-section)
   - [Update the lab's contact info or address](#task-e-update-the-labs-contact-info-or-address)
7. [How to publish your changes](#7-how-to-publish-your-changes)
8. [How to preview the site before publishing](#8-how-to-preview-the-site-before-publishing)
9. [If something looks broken](#9-if-something-looks-broken)
10. [Quick reference — what file does what](#10-quick-reference--what-file-does-what)

---

## 1. What is this website, exactly?

The Frantz Lab website is a collection of plain text files stored on the internet in a service called **GitHub**. These files get automatically converted into the actual website you see in a browser. The website is then hosted (served to visitors) by a service called **Cloudflare Pages**.

Think of it like this:
- **GitHub** = a filing cabinet on the internet where all the website's content files live
- **Cloudflare Pages** = a printer that reads those files and turns them into the live website
- Whenever you update a file in GitHub, Cloudflare automatically reprints the website within a couple of minutes

You never need to touch Cloudflare directly. You only ever edit files in GitHub.

---

## 2. The big picture — how it all fits together

Here is what happens from "I want to update the site" to "visitors see the change":

```
You edit a file on your computer
        ↓
You "push" (upload) the change to GitHub
        ↓
Cloudflare Pages notices the new file automatically
        ↓
Cloudflare rebuilds and publishes the site (~2 minutes)
        ↓
Visitors see the updated site
```

That's the whole loop. The hardest part is just learning which file to edit for which task. This guide covers all the common ones.

---

## 3. Accounts you need access to

Before you can do anything, make sure you have login credentials for both of these:

### GitHub
- **Website:** github.com
- **What it is:** Where all the website files are stored
- **Repository (project) name:** `deflab-website`
- **What to do:** Ask whoever currently maintains the site to add you as a collaborator on the repository, or transfer ownership of the repository to you

### Cloudflare Pages
- **Website:** dash.cloudflare.com
- **What it is:** The service that turns the files into the live website
- **What to do:** Ask to be added to the Cloudflare account, or have the Pages project transferred to a new account
- **Important:** You do NOT need to log in to Cloudflare regularly. It works automatically. You only need access if the site stops deploying or you need to change settings.

> **Tip:** Write down both sets of login credentials and store them somewhere safe (a password manager like 1Password or Bitwarden is ideal). Losing access to GitHub means losing the ability to edit the site.

---

## 4. Software to install on your computer

You need three programs. Install them in this order:

### Step 1 — Install Visual Studio Code (VS Code)
This is a free text editor designed for editing code and website files. It's much better than Notepad or TextEdit because it color-codes the files and helps you avoid mistakes.

- **Download:** https://code.visualstudio.com/
- Choose the version for your operating system (Mac or Windows) and follow the installer

### Step 2 — Install Git
Git is the program that lets you download the website files, track changes, and upload them back to GitHub.

**On Mac:**
1. Open the Terminal app (search for "Terminal" in Spotlight)
2. Type `git --version` and press Enter
3. If Git is not installed, macOS will prompt you to install it automatically — follow that prompt

**On Windows:**
1. Download from https://git-scm.com/download/win
2. Run the installer, accepting all default options

After installing, you need to tell Git who you are. Open Terminal (Mac) or Git Bash (Windows) and run these two commands, replacing the example text with your real name and email:
```
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
```

### Step 3 — Install Hugo Extended
Hugo is the program that converts the website files into actual web pages so you can preview the site on your computer before publishing.

**On Mac** (using Homebrew):
1. First install Homebrew (a package manager for Mac) if you don't have it — paste this into Terminal:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Then install Hugo:
   ```
   brew install hugo
   ```

**On Windows:**
1. Download the Hugo Extended installer from https://github.com/gohugoio/hugo/releases
2. Look for a file named something like `hugo_extended_0.154.2_windows-amd64.zip`
3. Extract it and follow the setup instructions on the Hugo website

### Step 4 — Install Go
Hugo requires Go to be installed. Download it from https://go.dev/dl/ and run the installer.

### Step 5 — Install Node.js
Node.js handles the CSS styling. Download the LTS version from https://nodejs.org/ and run the installer.

---

## 5. Getting the website files onto your computer

This only needs to be done once. After that, you just sync updates.

1. Open Terminal (Mac) or Git Bash (Windows)
2. Navigate to where you want to store the files. For example, to put them on your Desktop:
   ```
   cd ~/Desktop
   ```
3. Download (clone) the repository. You'll need the GitHub URL — it will look like:
   ```
   git clone https://github.com/[username]/deflab-website.git
   ```
   Replace `[username]` with the actual GitHub username that owns the repository.
4. Move into the downloaded folder:
   ```
   cd deflab-website
   ```
5. Install the required extra files:
   ```
   npm install
   ```
   This downloads supporting files that the site needs. It may take a minute.

6. Install the Hugo theme:
   ```
   git submodule update --init --recursive
   hugo mod get -u
   hugo mod tidy
   ```

You now have a full copy of the website on your computer.

---

## 6. Common tasks — step by step

---

### Task A: Add a new lab member

**What you're doing:** Creating a small text file with the person's information and adding their photo.

**Step 1 — Prepare the photo**
- Get a photo of the new person (JPG format works fine)
- Rename it to their name in lowercase with hyphens, like: `firstname-lastname.jpg`
- Copy it into this folder on your computer:
  ```
  deflab-website/static/images/
  ```

**Step 2 — Create their profile file**
- Open VS Code
- Go to File → Open Folder → select the `deflab-website` folder
- In the file panel on the left, navigate to `content/people/`
- Right-click → New File
- Name it `firstname-lastname.md` (using their actual name, all lowercase, with hyphens)

**Step 3 — Fill in the file**

Copy and paste this template into the new file, then replace the example info:

```
---
title: First Last, PhD
role: Graduate Student
email: netid@wustl.edu
image:
  filename: /images/firstname-lastname.jpg
  alt: First Last
weight: 10
social:
  - icon: linkedin
    icon_pack: fab
    link: https://www.linkedin.com/in/their-linkedin/
---

**Role:** 3rd Year PhD Student

**Education:** B.S. in Chemistry, Some University

**Email:** [netid@wustl.edu](mailto:netid@wustl.edu)

**Hometown:** City, State

**Hobbies:** hiking, reading, cooking
```

**Notes on the fields:**
- `title` — their full name and degree (omit degree suffix if they don't have one)
- `role` — appears on the People page card. Use: `Graduate Student`, `Postdoctoral Researcher`, `Research Scientist`, `Lab Manager`, etc.
- `weight` — controls the order people appear. Lower numbers appear first. Doug Frantz is `1`, so start new members at `10` and go up by 5 for each person
- `social` — delete the whole `social:` block if they don't have a LinkedIn
- The section below the `---` line is free-form text — you can write whatever you like

**Step 4 — Save and publish** (see [Section 7](#7-how-to-publish-your-changes))

---

### Task B: Remove a lab member who left

**Step 1** — In VS Code, find their file in `content/people/` and delete it.

**Step 2** — Optionally delete their photo from `static/images/` to keep things tidy (not required).

**Step 3** — Save and publish (see [Section 7](#7-how-to-publish-your-changes)).

---

### Task C: Add a new publication

The publication list lives in a single file. You just add a new line to the top of it.

**Step 1** — In VS Code, open:
```
content/publication/publications-list.md
```

**Step 2** — Look at the top of the file. You'll see entries numbered like `65.`, `64.`, `63.` and so on.

**Step 3** — Add a new entry at the very top (just below the `---` line and the `summary:` section), following this format:

```
66\. Author, A.B.; Frantz, D.E.; et al. "Title of the Paper." Journal Name, Year, Volume, Pages. [DOI: 10.xxxx/xxxxx](https://doi.org/10.xxxx/xxxxx)
```

**Important formatting rules:**
- The number must be followed by a backslash then a period: `66\.` — this is required, do not skip the backslash
- Put the DOI link at the end in the format shown above
- Leave a blank line between each publication entry

**Step 4** — Save and publish (see [Section 7](#7-how-to-publish-your-changes)).

---

### Task D: Add photos to the Group Life section

The Group Life section has three albums: Conferences & Travel, Dinners & Outings, and Lab Life & Celebrations.

**Step 1 — Add the photo files**

Copy your new photo files into:
```
deflab-website/static/images/
```
Keep the original filenames (e.g., `IMG_1234.jpeg`).

**Step 2 — Find the right album file**

The album files are in `content/group-life/`:
- `conferences-and-travel.md` — conference trips, travel, academic events
- `dinners-and-outings.md` — group dinners, social outings
- `lab-life-and-celebrations.md` — lab events, birthdays, milestones

Open whichever one applies.

**Step 3 — Add the photo to the gallery list**

Inside the file, you'll see a section like:
```yaml
gallery_items:
  - image: "IMG_5149.jpeg"
    caption: "Conference networking"
  - image: "IMG_5515.jpeg"
    caption: "Evening group photo on the road"
```

Add your new photo by copying one of those blocks and changing the filename and caption:
```yaml
  - image: "YOUR_PHOTO_FILENAME.jpeg"
    caption: "A short description of the photo"
```

> **Indentation matters!** Make sure your new entry lines up exactly with the others — the `-` should line up with the other `-` characters above it.

**Step 4** — Save and publish (see [Section 7](#7-how-to-publish-your-changes)).

**To create a brand new album:**

1. In `content/group-life/`, create a new file named `album-name.md`
2. Use this as a template:
```
---
title: "Album Name"
date: 2026-01-01
summary: "A one-sentence description."
gallery_items:
  - image: "photo1.jpeg"
    caption: "Caption here"
  - image: "photo2.jpeg"
    caption: "Caption here"
---
```

---

### Task E: Update the lab's contact info or address

**For the address in the footer:**

Open:
```
layouts/_partials/components/footers/minimal.html
```

Find the section that looks like:
```html
<p class="font-semibold text-[#252525]">Frantz Lab</p>
<p>Department of Biochemistry & Molecular Biophysics</p>
<p>Washington University School of Medicine</p>
<p>660 S. Euclid Ave., Campus Box 8231</p>
<p>St. Louis, MO 63110</p>
```

Edit whatever needs to change. Save the file.

**For the email address:**

In the same file, find:
```html
<a href="mailto:dougf@wustl.edu"
```
Change `dougf@wustl.edu` to the new email address (it appears twice — update both).

**For the site description and tagline:**

Open:
```
config/_default/params.yaml
```

Find and edit:
```yaml
name: "Frantz Lab"
organization: "Washington University School of Medicine"
tagline: "Translational Chemistry & Drug Discovery"
description: "The Frantz Lab at Washington University in St. Louis - ..."
```

---

## 7. How to publish your changes

After editing files, you need to upload them to GitHub. This is called "committing and pushing."

**Open Terminal (Mac) or Git Bash (Windows), navigate to the project folder:**
```
cd ~/Desktop/deflab-website
```
(Adjust the path if you saved it somewhere else.)

**Run these three commands in order:**

```bash
git add .
```
This stages all your changes (marks them as ready to upload).

```bash
git commit -m "Brief description of what you changed"
```
This saves a snapshot of your changes with a note. Replace the message in quotes with a short description of what you did, e.g.:
- `"Add Alyson Grow to people page"`
- `"Add publication 66"`
- `"Update lab address"`

```bash
git push
```
This uploads your changes to GitHub.

**What happens next:**
- GitHub receives your files
- Cloudflare Pages automatically detects the update
- The site rebuilds (~2 minutes)
- Visit [deflab-website.pages.dev](https://deflab-website.pages.dev/) and refresh to see your changes

If `git push` asks for a username and password, use your GitHub credentials. If it doesn't accept your password, you may need to create a Personal Access Token in GitHub settings — search "GitHub personal access token" for instructions.

---

## 8. How to preview the site before publishing

You can preview changes locally (on your computer) before anyone else sees them. This is useful for catching mistakes.

**Step 1 — Open Terminal and go to the project folder:**
```
cd ~/Desktop/deflab-website
```

**Step 2 — Start the preview server:**
```
hugo server
```

**Step 3 — Open a browser and go to:**
```
http://localhost:1313
```

You'll see a live preview of the site. Every time you save a file, the preview updates automatically.

**Step 4 — When done, stop the server** by pressing `Ctrl + C` in the Terminal.

> The preview server is only visible on your own computer. Nothing is published to the live site until you do `git push`.

---

## 9. If something looks broken

**The site looks fine but my changes didn't appear:**
- Wait 3–5 minutes and refresh. Cloudflare takes a moment to rebuild.
- Check that you ran `git push` successfully (you should have seen output in Terminal, not an error).

**The site won't load at all:**
- Log in to dash.cloudflare.com and check the Pages project. It will show whether the last deployment succeeded or failed.
- If the deployment failed, there will be an error log — read it to understand what went wrong.

**I accidentally deleted something important:**
- Don't panic. Every change is saved in Git history.
- Run `git log` in Terminal to see a list of past changes.
- Run `git revert HEAD` to undo the most recent change.
- Or ask someone with Git experience to help recover the file.

**The site looks broken on my computer but fine on the live site:**
- Run `hugo mod tidy` in Terminal, then `hugo server` again.
- If that doesn't fix it, run `npm install` to reinstall dependencies.

**The `hugo server` command fails when I run it:**
- Make sure you ran `npm install` after first cloning the project
- Make sure Hugo, Go, and Node.js are all installed correctly
- Restart Terminal and try again

**I got an error saying "nothing to commit":**
- This just means you didn't actually save any files before running `git add`. Make sure you saved the file in VS Code (Cmd+S on Mac, Ctrl+S on Windows) and try again.

---

## 10. Quick reference — what file does what

| What you want to change | File to edit |
|---|---|
| Add/remove a lab member | `content/people/[name].md` |
| Lab member photo | `static/images/[photo].jpg` |
| Publications list | `content/publication/publications-list.md` |
| Group Life photos | `content/group-life/[album-name].md` |
| Research area pages | `content/research/[research-area].md` |
| Homepage sections | `content/home/index.md` |
| Footer address & email | `layouts/_partials/components/footers/minimal.html` |
| Navigation menu links | `config/_default/menus.yaml` |
| Site name, tagline, description | `config/_default/params.yaml` |
| WashU / institutional logo | `static/images/WashU/washu-medicine-logo.png` |
| Site icon (browser tab) | `assets/media/icon.png` |

---

## Getting help

If you're stuck, these are the best resources:

- **HugoBlox documentation** (the theme this site uses): https://docs.hugoblox.com/
- **Hugo documentation** (the engine): https://gohugo.io/documentation/
- **GitHub guides**: https://docs.github.com/en/get-started
- **Stack Overflow**: Search for your specific error message — someone has almost certainly encountered it before

For university IT support with hosting or domain questions, contact WashU Medicine IT.

---

*Last updated: February 2026*
