---
date: 2017-04-20T15:14:39+02:00
title: Website setup
---

Instructions on how to host your Hugo website on Github. The website URL will be `myGHwebsite.github.io`, and it is assumed that `myGHwebsite` is the same as your Github username. These instructions are based on this [blog post](https://proquestionasker.github.io/blog/Making_Site/#initializing-github-pages-to-work-with-hugo-and-blogdown), which in turn is based on [this](https://hjdskes.github.io/blog/update-deploying-hugo-on-personal-gh-pages/). (You can also consult [this](https://gohugo.io/tutorials/github-pages-blog/), although I think it is unnecessary.) 

1. Create a Github repository `myGHwebsite.github.io`, substitute `myGHwebsite` for whatever you want.
2. Follow Github setup instructions to make your first commit and push. On the command line:
    
    ```bash
    mkdir myGHwebsite.github.io
    cd myGHwebsite.github.io
    echo "# myGHwebsite.github.io" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/GHusername/myGHwebsite.github.io.git
    git push -u origin master
    ```
3. Reload the Github page, you will see "1 commit" in your repository page. Click on "Branch: master", create a new branch called "sources".
4. You will see now "2 branches", click on it. Click on "Change default branch", and choose "sources", then update.
5. On the command line, `git pull`, to sync with what you just did on your browser.
6. Now type `git checkout sources` to switch to sources branch.
7. Download [this code](/website_setup/setup.sh/), put it in your `myGHwebsite.github.io` repository, call it `setup.sh`. On line 11 change `USERNAME` for your own Github username, and on line 13 change `SOURCE` for `sources`. **ATTENTION**, this script assumes that your Github username and your website have the same name. If this is not true, make the necessary changes (add a new variable `WEBSITENAME` and use it in lines 45 and 49).
8. Run the script only once. Type `bash setup.sh`.
9. It is time to put your hugo website in your repository directory. Copy all what you need, make sure the website is ok, test it with `hugo server`.
10. Now deploy your website. Download [this code](/website_setup/deploy.sh/), put it in your `myGHwebsite.github.io` repository, call it `deploy.sh`. Don't forget to change `USERNAME` and `SOURCE` in lines 13 and 15.
11. Run `deploy.sh` whenever you want to update your website. Just type `bash deploy.sh`. No need to build the website manually, `deploy.sh` already has a `hugo` command. From my experience, it may take a few minutes for Github to show your webpage properly, even if your `hugo server` test yielded good results. Wait a little bit, it will work out.