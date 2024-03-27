"use client";

import Component from "@/components/component";
import MyComponent from "@/components/mycomponent";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyComponent />
      {/* <Component /> */}
    </div>
  );
}
