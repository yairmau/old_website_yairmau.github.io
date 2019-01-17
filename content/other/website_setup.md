---
date: 2017-04-20T15:14:39+02:00
title: Website setup
---

Instructions on how to host your Hugo website on Github. The website URL will be `username.github.io`, where username is your Github username.
These instructions are based on this [blog post](https://hjdskes.github.io/blog/update-deploying-hugo-on-personal-gh-pages/) (You can also consult [this](https://gohugo.io/tutorials/github-pages-blog/), although I think it is unnecessary.) 


1. On Github, create repository called username.github.io
2. Locally, do the following:
    
    ```bash
    mkdir username.github.io
    cd username.github.io
    echo "# username.github.io" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/username/username.github.io.git
    git push -u origin master
    ```
3. Create a new branch called "hugo": `git checkout -b hugo`
4. Put in this "hugo" branch all the source files for your website.
5. Generate website: type `hugo`, this creates a "public" folder
6. Download [setup.sh](/website_setup/setup.sh/), put it together with other files in the hugo branch.
7. Push this branch:
    ```bash
    git add --all
    git commit -m "first hugo branch commit"
    git push origin hugo
    ```
8. Go to Github, make "hugo" the default branch. In the repository website, you will see now "2 branches", click on it. Click on "Change default branch", and choose "sources", then update.
9. Execute setup script (`bash setup.sh`), still in hugo branch.
10. To make sure that "hugo" branch is in sync with "origin" (i.e. Github), repeat step 7.
11. Download [deploy.sh](/website_setup/deploy.sh/) and execute it (`bash deploy.sh`).
12. That's it. Now make changes to your website and see if running `deploy.sh` updates your website properly. Remember to run step number 7 before you do so.