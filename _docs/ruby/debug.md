---
layout: default
title: debug
parent: Ruby View
---

# Debug
Its possible to pause the code to analyze variables, and step through the code.
{: .fs-6 .fw-300 }

## In your Ruby View
{% highlight erb %}
<% require "byebug" %>
{% endhighlight %}

Where a break in the code is needed, enter this
{% highlight erb %}
<% byebug %>
{% endhighlight %}

## Attach to the container
To see the debug window
{% highlight bash %}
$ docker attach sv-app
{% endhighlight %}

## Quit the container
You need to press this key combination to exit the container, if not it will stop.
{% highlight bash %}
press ctrl-p, ctrl-q
{% endhighlight %}

## If the container stops
If you exit the container by pressing ctrl-c instead of the recommended way, it will stop. In that case:
{% highlight bash %}
$ docker start sv-app
{% endhighlight %}

