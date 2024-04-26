---
layout: default
title: methods
parent: Ruby View
---
# Methods
These are the available methods for use in Ruby Views.

## Get data

### Example: Get active customers
{% highlight ruby %}
  customers = table("customers", active:true, fields:"name, email")
{% endhighlight %}

### Method
{% highlight ruby %}
  table(table, criteria, fields:, filter:, rows:)
{% endhighlight %}
- `table` table name
- `criteria` Add criteria as needed e.g.: school:"fro", class:"3a", year:"2001"
    - if conflict with built in parameters, wrap them in one pair of curly braces {} as parameter 2
- `fields` comma separated string of fields to retrive, e.g. fields:"first_name, last_name"
- `filter` optional filter with solr syntax. same as tag "filter"
- `rows` default is 20 rows. Increase to improve sorting, or download more files at once. Set 'MAX_ROWS' if needed, but check performance when using large values.
- Returns empty array [] if no hits

## Lookup data
Lookup data in another table. This is similar to using the tag "lookup" in xml

### Example: Lookup address_id to find the city
{% highlight ruby %}
  lookup(main:customers, foreignkey:"address_id", table:"address", primarykey:"id", fields:"city")
{% endhighlight %}
table customers will be updated with the new data

### Method
{% highlight ruby %}
  lookup(main:, foreignkey, primarykey:, fields:, table:)
{% endhighlight %}
- `main` existing variable that you want to extend with more data
- `foreignkey` the foreign key in the main document
- `primarykey` the primary key in the lookup table
- `table` the lookup table that has more info


