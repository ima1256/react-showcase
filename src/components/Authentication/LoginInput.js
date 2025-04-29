import { useState } from "react";

const LoginInput = ({}) => {

    

  return (
    <Input
      className="flex-grow"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      type="email"
      required
    />
  );
};
