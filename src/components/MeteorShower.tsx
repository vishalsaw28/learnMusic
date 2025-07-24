"use client";

import React from "react";
import { Meteors } from "./ui/meteors";
import { deflate } from "zlib";

export default function MeteorShower() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Meteor animation fills the screen */}
      <Meteors number={30} />
    </div>
  );
}
