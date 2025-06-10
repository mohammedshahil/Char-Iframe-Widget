# IFrame Widget for Odoo 18.0

This module adds a custom IFrame widget that can be used with Char fields to display web pages within Odoo forms.

## Usage

In your form view, add the widget to any Char field:

```xml
<field name="url_field" widget="iframe"/>
```

You can customize the widget behavior using options:

```xml
<field name="url_field" widget="iframe" options="{
    'url': 'https://www.example.com',
    'width': '100%',
    'height': '550px'
}"/>
```
