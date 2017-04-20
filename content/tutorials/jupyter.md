---
date: 2017-03-11T15:14:39+02:00
title: Jupyter
menu:
  main:
    parent: "Python"
---
[Home](/)/[Tutorials](/tutorials/)/[Python](/tutorials/python/)

Python is a great language for scientific computing, most of the programming done by our group is in python. We provide below some links for learning this language, and below we offer many examples of python codes so that the reader can learn by example. You are invited to download these codes, tweak with them, break them, hack them as you wish!


Most codes focus on plotting, but other algorithms such as numerical integration and Fourier transforms can also be found.

* [Learn Python the Hard Way](https://learnpythonthehardway.org/book/)
* [A Crash Course in Python for Scientists](http://nbviewer.jupyter.org/gist/rpmuller/5920182)
* [Fun with Lists](http://matthiaseisen.com/fwl/py/)
* [Python | Codecademy](https://www.codecademy.com/learn/python)
* [Scipy Lecture Notes](http://www.scipy-lectures.org/index.html)
* [A gallery of interesting IPython Notebooks](https://github.com/ipython/ipython/wiki/A-gallery-of-interesting-IPython-Notebooks)
​

Start by downloading [Anaconda](https://www.continuum.io/downloads), a package manager application that will help you get started with python in all platforms.
​
Make sure you are acquainted with ipython (interactive python, [try it here](https://www.pythonanywhere.com/try-ipython/)), and with [Jupyter Notebook](http://jupyter.org/).
​
I recommend [Sublime Text](https://www.sublimetext.com/) for writing code, and you can install the Anaconda package to it to have a smooth IDE. [not the same anaconda as mentioned above! Yes, it's confusing, I know.]

Python tutorial.

```python
import numpy as np
for i in np.arange(10):
    print(i*0.2)
```

**************************************************

## Least squares fit of nonlinear function
[Jupyter notebook](http://nbviewer.jupyter.org/urls/bitbucket.org/yairmau/notebooks/raw/master/least-squares.ipynb)  

Main features:
`LaTeX text, scipy.optimize.curve_fit, matplotlib.patches`  
![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/least-squares.png)

**************************************************

## Fun with histograms
[Jupyter notebook](http://nbviewer.jupyter.org/urls/bitbucket.org/yairmau/notebooks/raw/master/histogram.ipynb)  

Main features:
`np.histogram, plt.hist, plt.bar, plt.barh, gridspec, least squares fit of nonlinear function, plt.hist2d`  
![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/histogram.png)

**************************************************

## Fancy subplot grid

[Jupyter notebook](http://nbviewer.jupyter.org/urls/bitbucket.org/yairmau/notebooks/raw/master/subplot-grid.ipynb)

Highly customizable subplot structure. Also, figure contains several axis configurations and labeling options.  
Main features:
`gridspec subplots; numpy-compatible heaviside; label, ticks and axis manipulations; log scale`
![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/subplot-grid.png)

**************************************************

## Streamplot

[Jupyter notebook](http://nbviewer.ipython.org/urls/bitbucket.org/yairmau/notebooks/raw/master/linear-system.ipynb)

Streamplot of a two-dimensional linear system, with eigenvectors and nullclines. Python shows LaTeX equations beautifully.  
Main features:
`meshgrid, streamplot, contour, legend, LaTeX`
![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/linear-system.png)

**************************************************

## The time dependent Ginzburg-Landau equation

[Jupyter notebook](http://nbviewer.jupyter.org/urls/bitbucket.org/yairmau/notebooks/raw/master/tdgle.ipynb)

Numerical integration of a parabolic partial differential equation, using finite differences: Euler step to advance time, and a 5-point stencil to approximate the Laplacian.  
Main features:
`imshow, colorbar, set_data`

<iframe width="560" height="315" src="https://www.youtube.com/embed/JgE9Px7zsQE" frameborder="0" allowfullscreen></iframe>

**************************************************

## The double pendulum

[Jupyter notebook](http://nbviewer.jupyter.org/urls/bitbucket.org/yairmau/notebooks/raw/master/double-pendulum.ipynb)

Numerical integration of the equations of motion of the double pendulum. This time, scipy's ode itegrator was used. Nice example of how to make a movie.  
Main features:
`scipy.integrate.ode, set_data, set_aspect('equal'), remove plot, movie`

<iframe width="560" height="315" src="https://www.youtube.com/embed/-76LN_Kph7A" frameborder="0" allowfullscreen></iframe>

**************************************************

## The Hilbert curve

[Jupyter notebook](http://nbviewer.jupyter.org/urls/bitbucket.org/yairmau/notebooks/raw/master/hilbert-curve.ipynb)

Construction of the Hilbert curve as a Lindenmayer system (L-system).  
Main features:
`string operations, movie`

<iframe width="560" height="315" src="https://www.youtube.com/embed/Oudyl56GPJU" frameborder="0" allowfullscreen></iframe>


**************************************************

## A hysteresis mechanism

[Jupyter notebook](http://nbviewer.jupyter.org/urls/bitbucket.org/yairmau/notebooks/raw/master/hysteresis.ipynb)

Hysteresis mechanism created by the bistability of states. System goes to minimum points u in the energy functional f=u^4-2u^2+hu. The the parameter h is ramped down and up during this simulation.  
Main features:
`sympy analytical calculations, numpy dtypes, movie`

<iframe width="560" height="315" src="https://www.youtube.com/embed/xgRDhOifFow" frameborder="0" allowfullscreen></iframe>

**************************************************

## Contour plot

[Jupyter notebook](http://nbviewer.ipython.org/urls/bitbucket.org/yairmau/notebooks/raw/master/contours.ipynb)

Contour plot with many customizable options. Also, a nice way to truncate a colormap so it gives the color range that you want.  
Main features:
`truncate_colormap, contour, contourf (fill), clabel (contour label)`

![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/cont.png)

**************************************************

## Drowning person problem

[Jupyter notebook](http://nbviewer.ipython.org/urls/bitbucket.org/yairmau/notebooks/raw/master/sea-sand.ipynb)

How should ​lifeguard run in order to save a drowning person in minimal time? Answer: by using Snell's law of refraction!  
This is a nice example how to use spines (x and y axis form a cross), instead of rectangular figures as usual. Also, "annotations" are used, where things can be labeled with the help of arrows.  
Main features:
`spines, matplotlib.patches.Rectangle, annotate`

![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/sea-sand.png)

**************************************************

## This website's logo

[Jupyter notebook](http://nbviewer.ipython.org/urls/bitbucket.org/yairmau/notebooks/raw/master/website-logo.ipynb)

Simple example of how to make a figure without any visible axes.  
Main features:
`set_axis_off, fill_between, matplotlib inline plot on Jupyter`

![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/site-logo.png)

**************************************************

## Bars

[Jupyter notebook](http://nbviewer.ipython.org/urls/bitbucket.org/yairmau/notebooks/raw/master/bars.ipynb)

Horizontal and vertical bars, with numeric legends. Unicode support.  
Main features:
`unicode, bar, barh, grid`

![](http://www.bitbucket.org/yairmau/notebooks/raw/master/figures/bars.png)

[Jupyter notebook](http://nbviewer.ipython.org/urls/bitbucket.org/yairmau/notebooks/raw/master/bars.ipynb)


 First Header  | Second Header
  ------------- | -------------
  Content Cell  | Content Cell
  Content Cell  | Content Cell