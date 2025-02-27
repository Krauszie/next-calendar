import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const about = {
  title: "About me",
  description:
    "A Nomad Full Stack Developer seeking to enhance expertise and specialize in Front-End Development. Currently interested in Front-End Development and exploring opportunities in Project Management.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Faza Murtadho",
    },
    {
      fieldName: "Born",
      fieldValue: "East Borneo",
    },
    {
      fieldName: "Hobby",
      fieldValue: "Drawing, Coffee, Board Game",
    },
    {
      fieldName: "Residence",
      fieldValue: "Near Sleman City Hall Mall",
    },

    {
      fieldName: "Languages",
      fieldValue: [
        "Indonesia: Native",
        "English: Fluent",
        "Javanese: Rude one only (Eastern Javanese)",
        "Japanese: N5 (Rusty/Washed)",
      ],
    },
  ],
};

const hobby = {
  title: "Big Title",
  descriptions:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, eligendi dicta! Ducimus.",
  items: [
    {
      itemName: "itemName 1",
      itemDesc: "Desc 1",
      status: "Status 1",
    },
    {
      itemName: "itemName 2",
      itemDesc: "Desc 2",
      status: "Status 2",
    },
    {
      itemName: "itemName 3",
      itemDesc: "Desc 3",
      status: "Status 3",
    },
  ],
};

const languages = {
  title: "Languages",
  descriptions: "Some Languages that I can speak or understand",
  items: [
    {
      itemName: "Bahasa Indonesia",
      status: "Native",
    },
    {
      itemName: "English",
      status: "Fluent",
    },
    {
      itemName: "Javanese",
      status: "Rude one only (Eastern Javanese)",
    },
    {
      itemName: "Japanese",
      status: "N5 (Rusty/Washed)",
    },
  ],
};

const AboutPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col-reverse xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[400px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="mockup">Button 2 (WIP)</TabsTrigger>
          </TabsList>

          {/* Tab Mockup */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="mockup" className="w-full">
              <div className="border-2 border-red-500 flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{hobby.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {hobby.descriptions}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="border-2 border-green-500 grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {hobby.items.map((item, index) => {
                      return (
                        <li className="bg-[#232329] h-[185px]" key={index}>
                          <span className="text-accent">{item.itemName}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.itemDesc}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                            {item.status}
                            <p className="text-white/60"></p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify text-lg">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">
                          {Array.isArray(item.fieldValue)
                            ? item.fieldValue.join(", ")
                            : item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutPage;
