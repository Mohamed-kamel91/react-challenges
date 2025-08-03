import { ChevronDown } from 'lucide-react';

import { ContentLayout } from '@layouts';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@features/accordion';

export const AccordionRoute = () => {
  return (
    <ContentLayout title="Accordion">
      <div className="max-w-lg">
        <Accordion multiple collapsible>
          <AccordionItem defaultExpanded>
            <AccordionTrigger
              expandIcon={<ChevronDown size={20} />}
            >
              <span className="text-lg">Item 1</span>
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ab quos quam, voluptatem ipsa ratione maiores
              quasi quis beatae fugit. Voluptas ea voluptatem,
              quo incidunt sequi possimus voluptatum sit.
              Dignissimos, totam!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionTrigger
              expandIcon={<ChevronDown size={20} />}
            >
              <span className="text-lg">Item 2</span>
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Similique dolorum autem ullam delectus
              adipisci, vero, doloribus nobis incidunt quas
              voluptas rerum aliquam blanditiis quisquam odit
              amet tempore dolore quis molestias.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionTrigger
              expandIcon={<ChevronDown size={20} />}
            >
              <span className="text-lg">Item 3</span>
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Similique dolorum autem ullam delectus
              adipisci, vero, doloribus nobis incidunt quas
              voluptas rerum aliquam blanditiis quisquam odit
              amet tempore dolore quis molestias.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ContentLayout>
  );
};
