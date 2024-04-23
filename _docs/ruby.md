---
layout: default
title: Ruby View
nav_order: 3
has_children: true
---
# Ruby View
KDRS Search & View can be extended for advanced data manipulation and presentation. Some basic XML config is need to activate the view. We encourage the use of XML where possible, and then use Ruby views when needed. This allows for readability in the community.
{: .fs-6 .fw-300 }

# Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

# Make a new file for the view
In the `vendor/your_system/` directory on your host, create a new file for your view. It must start with underscore. Use lowercase. The html.erb extention will make sure that the ruby server will process the file first, then the html engine.

{% highlight bash %}
/var/kdrs/sv/vendor/school_system/_diploma.html.erb
{% endhighlight %}

# Reference the view from xml
The program flow will be redirected to this view. You will be in control of the presentation.

{% highlight html %}
    <table>
        <rubyview>diploma</rubyview>
{% endhighlight %}

# Minimum template

{% highlight erb %}
<!-- DATA PREPARATION -->
<% 
    # Your data will be in the @docs variable
    # Adjust your data as needed before presentation
%>

<!-- DATA PRESENTATION -->
<%= render 'table' %>
{% endhighlight %}

This view template will generate the same view as the default template.
The difference is that you can manipulate the data as needed, and change the presentation with new styling, titles, extra text, tables etc. Maybe you want some different layout on print. This and more you can change from here.

`Notice the use of '=' to output Ruby on screen`

# Data
The data from xml will be available to the view in the `@docs` variable. If you need more data from other tables, you can fetch those here. See the examples for how this is done.

# Columns
Select the fields you want to show as columns in the view
{% highlight erb %}
<% 
    @show_fields = ["first name", "last name"] 
    @show_fields  <<  "land"  #alternative syntax 
%>
{% endhighlight %}



# Html
You can write plain html in this file
{% highlight html %}
    <h1>Hello, there!</h1>
{% endhighlight %}

# Ruby
You can write plain Ruby in this file, as long as you use the brackets.
{% highlight erb %}
    <% Ruby here %>
{% endhighlight %}


Ruby can be used to edit the data, or write HTML code, like in this example:

{% highlight erb %}
<% 5.times do %>
    <h1>Hello, there!</h1>
<% end %>
{% endhighlight %}


# CSS
You can style your data with css, or adjust margins
{% highlight html %}
<style>    
  .my-style {
    background-color: lightgray;
    font-size: larger;
    /* vscode editor will help suggest what to write here */
    /* you can also use chatgpt to write css */
  }
</style>
{% endhighlight %}

Note: It is technically possible use Javascript for advanced presentation. However - we encourage the use of Ruby whenever possible for human readability and code sharing.

