import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment";
import { registrarHistoria } from "@/libs/funciones";
import { FormNuevoServicio } from "@/components/sepelio/servicios/FormNuevoServicio";
import Router from "next/router";
import FormPresupuesto from "@/components/sepelio/servicios/FormPresupuesto";

function presupuesto(props) {
  const { usu } = useWerchow();

  const { isLoading } = useUser();

  //useSWR("/api/sepelio/ataudes", traerDatos);

  if (isLoading === true) return <Skeleton />;

  return (
    <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
          <FormPresupuesto />
        </>
      )}
    </>
  );
}

export default presupuesto;
