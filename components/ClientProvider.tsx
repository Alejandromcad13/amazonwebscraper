"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    //wraps the whole application into a context in order to use the notification system
    <>
      <Toaster />
      {children}
    </>
  );
};

export default ClientProvider;
