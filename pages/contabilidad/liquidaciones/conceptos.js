import React, { useState } from "react";
import useUser from "@/hook/useUser";
import { Skeleton } from "@/components/Layouts/Skeleton";
import useWerchow from "@/hook/useWerchow";
import axios, { all } from "axios";
import { toast } from "react-toastify";
import { Redirect } from "@/components/auth/Redirect";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment";
import { registrarHistoria, regHistorialAuto } from "@/libs/funciones";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

function conceptos(props) {

    const { usu } = useWerchow();

    const { isLoading } = useUser();
  
    if (isLoading === true) return <Skeleton />;

    return (
        <>
      {!usu ? (
        <Redirect />
      ) : (
        <>
         
        </>
      )}
    </>
    );
}

export default conceptos;