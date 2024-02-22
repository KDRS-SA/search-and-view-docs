---
layout: xml
title: rows
parent: XML View
---
Default number of rows is 20. Use this tag to change the default for this view.

E.g. for a diploma we always want all rows on the same page, so we set a high number.
{% highlight xml %}
    <table>
        <rows>1000</rows>
{% endhighlight %}

## Sorting
Beware that sorting will sort this number of rows. One page at a time. If you need to sort across all pages, then increase this number to avoid paging entirely. 

## Performance
Check to see if the increased loading time for the view is acceptable.

`Tip` Increase the number of rows to get them all in a pdf, or sent to printer.