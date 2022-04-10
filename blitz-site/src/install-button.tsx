import { Icon } from "@amoutonbrady/solid-heroicons";
import { duplicate, check } from "@amoutonbrady/solid-heroicons/outline";
import { createSignal } from "solid-js";

export const InstallButton = () => {
  const code = "npm install @dimensionhq/blitz";
  const [copied, setCopied] = createSignal(false);

  return (
    <button
      class={
        "mx-auto lg:mx-0 bg-white text-gray-800 " +
        "font-bold rounded-lg my-6 py-4 px-8 shadow-lg " +
        "focus:outline-none focus:shadow-outline transform transition " +
        "hover:scale-105 duration-300 ease-in-out font-mono " +
        "active:scale-100 "
      }
      onClick={() => {
        navigator.clipboard.writeText(code);
        setCopied(true);
      }}
    >
      {code}
      <Icon
        path={copied() ? check : duplicate}
        class="h-1.5em inline ml-1 align-bottom"
      />
    </button>
  );
};
