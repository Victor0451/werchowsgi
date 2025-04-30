import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  Alert,
  Button,
  Select,
  Option,
  Input,
  Textarea,
} from "@material-tailwind/react";
import moment from "moment";
import ReactToPrint from "react-to-print";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const FormEditarServicio = () => {
  return (
    <Card className="h-full w-full p-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="p-4">
          <div className="p-4 border-2 rounded-lg mt-3">
            <Typography variant="h3" color="blue-gray" className="mb-1">
              Editar Servicio
            </Typography>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default FormEditarServicio;
