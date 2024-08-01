---
layout: default
title: styling
parent: Ruby View
---
# Styling
How to make your templates look pretty
{: .fs-6 .fw-300 }

## Bootstrap
[Bootstrap](https://getbootstrap.com) makes modern css styling available in templates. 
### Example: Formatting a table
{% highlight html %}
  <table class="table">
{% endhighlight %}

### Example: Formatting a small table
{% highlight html %}
  <table class="table table-sm">
{% endhighlight %}

See [documentation](https://getbootstrap.com) for other examples

## Octicons
[Octicons](https://primer.style/foundations/icons) make icons available in templates. These are the same icons that Github uses.

### Example: Making an archive icon
{% highlight erb %}
  <%= octicon("archive") %>  
{% endhighlight %}

### Example: Making a larger icon
{% highlight erb %}
  <%= octicon("archive", height:30) %>  
{% endhighlight %}

### Example: Make the icon gray
{% highlight erb %}
  <%= octicon("archive", fill:"gray") %>  
{% endhighlight %}

`Note` Bootstrap can also show icons, but so far we like the simplicity of Octicons.