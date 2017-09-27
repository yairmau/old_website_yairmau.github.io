---
date: 2017-03-11T15:14:39+02:00
title: LaTeX
menu:
  main:
    parent: "Tutorials"
---
<!-- if you are going to write equation in other pages, then just copy
this there, and the two scripts at the bottom of this file. You can also copy this in the footer.html, for example,
LaTeX will be available throughout the whole site.
 -->
<script type="text/javascript"
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

[Home](/)/[Tutorials](/tutorials/)/[LaTeX](/tutorials/latex/)

## Equations
<!--
inline `$ \sqrt{c_a} $` math
display style
<div>$$
ax^2 +bx+c=0
$$</div>
https://gohugo.io/tutorials/mathjax/ -->
With LaTeX you can write beautiful equations like 
`$R_{\mu \nu} - {1 \over 2}g_{\mu \nu}\,R + g_{\mu \nu} \Lambda = 
 {8 \pi G \over c^4} T_{\mu \nu}$`  
or
<div>$$
\phi = 1 +
\cfrac{1}{1+
\cfrac{1}{1+
\cfrac{1}{1+\dotsb
}}}
$$</div>
Learn more [here](https://en.wikibooks.org/wiki/LaTeX/Mathematics).

## Presentation

Make beautiful presentations using Beamer! Download a full working example of my favorite template [here](/latex/beamer/beamer-example.zip). Click on the image below to see the full presentation.

<a href="/latex/beamer/talk-template.pdf" target="_blank"><img src="/latex/beamer/talk-beamer.png"></a>

## Posters

Make beautiful posters with LaTeX. Download [portrait](https://bitbucket.org/yairmau/notebooks/raw/master/portrait_poster.zip) and [landscape](https://bitbucket.org/yairmau/notebooks/raw/master/landscape_poster.zip) templates.

![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/landscape.png)
![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/portrait.png)

## PhD Thesis

This template is based on my PhD thesis, it can make your life easier!

1. Download this [zip file](/latex/phd-thesis/phd_template.zip).
2. Don't forget to read the file README.txt
3. Enjoy!

Take a look at the [compiled template](/latex/phd-thesis/phd-thesis.pdf).


## Hebrew

A LaTeX document with Hebrew text. Download [.tex source here](https://bitbucket.org/yairmau/notebooks/raw/master/tex_heb.tex), and the [pdf here](https://bitbucket.org/yairmau/notebooks/raw/master/tex_heb.pdf).
![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/heb_2pages.png)

See below a really practical use of the tools provided above. This is an exercise list in hebrew. Download [.tex source here](https://bitbucket.org/yairmau/notebooks/raw/master/targilim.tex), and the [pdf here](https://bitbucket.org/yairmau/notebooks/raw/master/targilim.pdf).
![](/latex/targilim.png)


<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [['$$','$$'], ['\[','\]']],
    processEscapes: true,
    processEnvironments: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    TeX: { equationNumbers: { autoNumber: "AMS" },
         extensions: ["AMSmath.js", "AMSsymbols.js"] }
  }
});
</script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Queue(function() {
    // Fix <code> tags after MathJax finishes running. This is a
    // hack to overcome a shortcoming of Markdown. Discussion at
    // https://github.com/mojombo/jekyll/issues/199
    var all = MathJax.Hub.getAllJax(), i;
    for(i = 0; i < all.length; i += 1) {
        all[i].SourceElement().parentNode.className += ' has-jax';
    }
});
</script>

