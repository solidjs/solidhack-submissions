import { atom, createBlitzState } from "@dimensionhq/blitz";
const textAtom = atom("");
export const Hero = () => {
  const [text, setText] = createBlitzState(textAtom);

  return (
    <div
      class={
        "pt-25 sm:pt-34 px-8 sm:px-20 container mx-auto flex flex-wrap " +
        "flex-col lg:flex-row"
      }
    >
      <div
        class={
          "flex-1 flex flex-col w-full justify-center items-center " +
          "text-center lg:items-start lg:text-left"
        }
      >
        <h1
          class={
            "mb-6 lg:my-4 text-5xl font-bold leading-tight " +
            "sm:whitespace-nowrap"
          }
        >
          Manage State Easily
        </h1>
        <p class="leading-normal text-2xl mb-8">
          The State Management library for&nbsp;
          <a
            href="https://solidjs.com/"
            class="text-orange-200 hover:underline"
          >
            Solid
          </a>
          .
        </p>
      </div>

      <div class="py-6 lg:px-10 justify-center items-center flex flex-1 flex-col gap-2">
        <input
          onInput={(e) => setText(e.currentTarget.value)}
          value={text()}
          placeholder="Type something"
          class="bg-white text-black text-2xl flex-1 lg:max-w-[30vw] max-h-[48px] focus:outline-none px-2"
        />
        <p>Entered Text: {text()}</p>
      </div>
    </div>
  );
};
