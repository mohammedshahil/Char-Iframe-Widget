/** @odoo-module */
import { registry } from "@web/core/registry";
import { _t } from "@web/core/l10n/translation";
import { charField } from "@web/views/fields/char/char_field";
import { Component } from "@odoo/owl";
import { standardFieldProps } from "@web/views/fields/standard_field_props";

export class IFrameFieldComponent extends Component {
  static template = "ms_iframe_widget.IFrameField";
  static props = {
    ...standardFieldProps,
    height: { type: String, optional: true },
    width: { type: String, optional: true },
    defaultUrl: { type: String, optional: true },
  };

  get frameUrl() {
    try {
      return this.props.value
        ? new URL(this.props.value).toString()
        : this.props.defaultUrl
        ? new URL(this.props.defaultUrl).toString()
        : "";
    } catch (e) {
      console.warn(
        _t("Invalid URL:"),
        this.props.value || this.props.defaultUrl
      );
      return "";
    }
  }

  get containerStyle() {
    return `height: ${this.props.height || "600px"}; width: ${
      this.props.width || "100%"
    };`;
  }
}

export const iframeField = {
  ...charField,
  component: IFrameFieldComponent,
  supportedTypes: ["char"],
  supportedOptions: [
    { name: "url", type: "string" },
    { name: "width", type: "string" },
    { name: "height", type: "string" },
  ],
  extractProps: ({ options = {} }) => ({
    height: options.height,
    width: options.width,
    defaultUrl: options.url,
  }),
};

registry.category("fields").add("iframe", iframeField);
