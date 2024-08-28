import { ContentLayout } from '@layouts';

import { ResizablePanel } from '@features/resizablePanel';

export const ResizablePanelRoute = () => {
  return (
    <ContentLayout title="Resizable panel">
      <div className="grid grid-cols-[minmax(0,_auto)_minmax(0,_1fr)] grid-rows-[500px]">
        <div className="flex flex-col">
          <ResizablePanel minW={200} maxW={600}>
            <div className="h-full p-5">
              <ul>
                <li className="p-2 font-medium">Link 1</li>
                <li className="p-2 font-medium">Link 2</li>
                <li className="p-2 font-medium">Link 3</li>
              </ul>
            </div>
          </ResizablePanel>
        </div>

        <div className="overflow-auto p-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Ad assumenda amet, tempore asperiores veritatis
          ab laborum magnam nesciunt quasi ipsum earum maiores,
          consequatur aspernatur eveniet aperiam tempora sunt
          dolorem magni ipsa? Quam natus, id neque, aut nam esse
          quaerat cum sunt accusantium veritatis alias vel
          placeat animi eligendi omnis tempore? Autem a dolore
          quo. Debitis quibusdam aspernatur modi cum unde
          commodi? Vel, qui explicabo repellat eligendi sunt
          voluptatum omnis? Ipsam eaque a, laboriosam consequatur
          repellendus reprehenderit omnis qui iusto nostrum iure
          doloremque perferendis accusamus quis eius deserunt,
          recusandae sapiente veniam rerum nam harum magni
          blanditiis est aspernatur maiores? Similique
          consequuntur suscipit pariatur labore dolorem animi
          nulla accusantium sint, nemo officia ad dolor inventore
          voluptatum? Consequuntur, aut, velit laborum officia
          quidem pariatur qui doloribus sint eos vero unde
          eveniet, mollitia distinctio voluptatem voluptates.
          Nostrum, animi alias accusamus asperiores vitae
          obcaecati quibusdam earum ut quam ipsa numquam sapiente
          exercitationem nisi molestiae tempore dolorem sequi
          consequatur enim delectus non optio consequuntur! Quos
          soluta in, aut quas nesciunt sint assumenda quae
          temporibus dignissimos ipsam, hic veritatis accusamus
          magni perspiciatis! Animi dolores autem cum illo
          corrupti culpa perspiciatis vitae assumenda dolore
          odit. Ipsam harum atque fugit, ut ratione accusantium
          vitae, debitis, reiciendis beatae aspernatur
          temporibus?
        </div>
      </div>
    </ContentLayout>
  );
};
