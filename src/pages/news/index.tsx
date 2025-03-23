import { useParams } from "react-router";
import { Accordion } from "@base-ui-components/react/accordion";

export function News() {
  const { id } = useParams();
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>What is Base UI? ${id}</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>
            Base UI is a library of high-quality unstyled React components for
            design systems and web apps.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>How do I get started?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>
            Head to the “Quick start” guide in the docs. If you’ve used unstyled
            libraries before, you’ll feel at home.
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}
