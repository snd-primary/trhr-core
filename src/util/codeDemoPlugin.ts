import type { satteri } from "@astrojs/markdown-satteri";

type MdastPlugin = NonNullable<
  NonNullable<Parameters<typeof satteri>[0]>["mdastPlugins"]
>[number];

// <CodeDemo> の中に書いたコードブロック (```html / ```css / ```js) を
// html / css / js の props に変換する Sätteri プラグイン。
// MDX はJSX属性内のテンプレートリテラルのインデントを崩すため、コードはこちらで書く。
const LANG_TO_PROP: Record<string, string> = {
  html: "html",
  css: "css",
  js: "js",
  javascript: "js",
};

export const codeDemoPlugin: MdastPlugin = {
  name: "code-demo",
  mdxJsxFlowElement(node, ctx) {
    if (node.name !== "CodeDemo") return;

    const attributes = [...node.attributes];
    const children = [];
    for (const child of node.children) {
      const prop =
        child.type === "code" ? LANG_TO_PROP[child.lang ?? ""] : undefined;
      if (prop && child.type === "code") {
        attributes.push({
          type: "mdxJsxAttribute",
          name: prop,
          value: child.value,
        });
      } else {
        children.push(child);
      }
    }
    // attributes は setProperty で書き換えられないので、ノードごと差し替える
    ctx.replaceNode(node, { ...node, attributes, children });
  },
};
