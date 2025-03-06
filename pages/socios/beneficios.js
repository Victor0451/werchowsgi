import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios, { all } from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";

function Beneficios(props) {
  const { usu } = useWerchow();

  const { isLoading } = useUser();

  if (isLoading === true) return <Skeleton />;

  return <>{!usu ? <Redirect /> : <></>}</>;
}

export default Beneficios;
