import { WaveFooter } from "../wave-footer";
import { Header } from "../header";
import { FeatureCard } from "../feature-card";
import { SectionHeading } from "../section-heading";
import { InstallButton } from "../install-button";
import { Example, ExampleCode, ExampleDemo } from "../example";

import AtomRaw from "../examples/atom?raw";

import { CreateBlitzExample } from "../examples/createBlitzState";
import stylingExampleString from "../examples/createBlitzState?raw";

import { CreateBlitzValue } from "../examples/createBlitzValue";
import CreateBlitzValueRaw from "../examples/createBlitzValue?raw";

import { CreateBlitzLoadableExample } from "../examples/createBlitzLoadableState";
import CreateBlitzLoadableExampleRaw from "../examples/createBlitzLoadableState?raw";

import { CreateBlitzReset } from "../examples/createBlitzReset";
import CreateBlitzResetRaw from "../examples/createBlitzReset?raw";

import { CreateSetBlitzStateExample } from "../examples/createSetBlitzState";
import CreateSetBlitzStateExampleRaw from "../examples/createSetBlitzState?raw";

import { SelectorExample } from "../examples/selectors";
import SelectorExampleRaw from "../examples/selectors?raw";

import { AtomExample } from "../examples/atomExample";
import AtomExampleRaw from "../examples/atomExample?raw";
import "./home.css";

const Home = () => {
  return (
    <div class="leading-normal tracking-normal text-white ">
      <Header />

      <section id="features" class="bg-white border-b py-8">
        <div class="container mx-auto pt-4 pb-12 px-8 sm:px-20">
          <SectionHeading>Features</SectionHeading>

          <div class="grid md:grid-cols-2 auto-rows-fr gap-8">
            <FeatureCard title="Built for Any Framework">
              But we natively support <a href="https://solidjs.com">Solid</a>
            </FeatureCard>
            <FeatureCard title="Global State">
              Easily manage your state across your entire app
            </FeatureCard>
            <FeatureCard title="Type Safe">
              We are built with Typescript
            </FeatureCard>
            <FeatureCard title="Zero dependencies">
              Just pair with Solid and good to go.
            </FeatureCard>
          </div>
        </div>
      </section>
      <section id="examples" class="bg-gray-100 py-8">
        <div class="container flex flex-col gap-5 mx-auto pt-4 pb-12 px-8 sm:px-20">
          <SectionHeading>"Create" Examples</SectionHeading>
          <Example>
            <ExampleCode code={AtomRaw} class="mb-1 flex-1 !lg:max-w-full" />
          </Example>
          <Example>
            <ExampleDemo>
              <CreateBlitzExample />
            </ExampleDemo>
            <div class="w-full lg:flex-1 lg:max-w-1/2">
              <ExampleCode
                code={stylingExampleString}
                class="mb-1 flex-1 !lg:max-w-full"
              />
            </div>
          </Example>
          <Example>
            <ExampleDemo>
              <CreateBlitzValue />
            </ExampleDemo>
            <div class="w-full lg:flex-1 lg:max-w-1/2">
              <ExampleCode
                code={CreateBlitzValueRaw}
                class="mb-1 flex-1 !lg:max-w-full"
              />
            </div>
          </Example>
          <Example>
            <ExampleDemo>
              <CreateBlitzLoadableExample />
            </ExampleDemo>
            <div class="w-full lg:flex-1 lg:max-w-1/2">
              <ExampleCode
                code={CreateBlitzLoadableExampleRaw}
                class="mb-1 flex-1 !lg:max-w-full"
              />
            </div>
          </Example>
          <Example>
            <ExampleDemo>
              <CreateBlitzReset />
            </ExampleDemo>
            <div class="w-full lg:flex-1 lg:max-w-1/2">
              <ExampleCode
                code={CreateBlitzResetRaw}
                class="mb-1 flex-1 !lg:max-w-full"
              />
            </div>
          </Example>
          <Example>
            <ExampleDemo>
              <CreateSetBlitzStateExample />
            </ExampleDemo>
            <div class="w-full lg:flex-1 lg:max-w-1/2">
              <ExampleCode
                code={CreateSetBlitzStateExampleRaw}
                class="mb-1 flex-1 !lg:max-w-full"
              />
            </div>
          </Example>
          <SectionHeading>"Selector" Examples</SectionHeading>
          <Example>
            <ExampleDemo>
              <SelectorExample />
            </ExampleDemo>
            <div class="w-full lg:flex-1 lg:max-w-1/2">
              <ExampleCode
                code={SelectorExampleRaw}
                class="mb-1 flex-1 !lg:max-w-full"
              />
            </div>
          </Example>
          <SectionHeading>"Atom" examples</SectionHeading>
          <Example>
            <ExampleDemo>
              <AtomExample />
            </ExampleDemo>
            <div class="w-full lg:flex-1 lg:max-w-1/2">
              <ExampleCode
                code={AtomExampleRaw}
                class="mb-1 flex-1 !lg:max-w-full"
              />
            </div>
          </Example>
        </div>
      </section>
      <footer class="bg-gradient">
        <WaveFooter />
        <section id="get-it" class="container mx-auto text-center p-6 pb-12">
          <SectionHeading variant="light">Get it</SectionHeading>
          <h3 class="mb-4 text-2xl leading-tight">
            Install with NPM (or check out the code on{" "}
            <a
              class="hover:underline text-orange-200"
              href="https://github.com/dimensionhq/blitz"
            >
              Github
            </a>
            )
          </h3>
          <InstallButton />
        </section>
      </footer>
    </div>
  );
};

export default Home;
