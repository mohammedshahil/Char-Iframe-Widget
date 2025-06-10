{
    "name": "IFrame Widget",
    "version": "18.0.1.0.0",
    "summary": "Custom IFrame Widget for Char Fields",
    "description": """
        This module adds an IFrame widget that can be used with Char fields
        to display web pages within Odoo forms.
    """,
    "author": "Mohammed Shahil",
    "website": "http://www.shahil.info",
    "license": "OPL-1",
    "category": "Extra Tools",
    "depends": [
        "base",
        "web",
    ],
    "assets": {
        "web.assets_backend": [
            "ms_iframe_widget/static/src/js/iframe_widget.js",
            "ms_iframe_widget/static/src/xml/iframe_widget.xml",
        ],
    },
    "installable": True,
    "application": False,
}
