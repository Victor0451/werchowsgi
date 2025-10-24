import React, { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2"; // Asegúrate de que react-chartjs-2 esté instalado
import DataTable from "react-data-table-component";
import FilterComponent from "../Layouts/FilterComponent";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import AlertProgreso from "./AlertProgreso";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const GraficosProgreso = ({
  asignado,
  trabajado,
  operSel,
  mesSel,
  anoSel,
  porcenTab,
  gestiones,
}) => {
  const printRef = useRef();
  const [isPrinting, setIsPrinting] = useState(false);

  const handleDownloadPdf = () => {
    setIsPrinting(true);
  };

  useEffect(() => {
    if (isPrinting) {
      const print = async () => {
        const element = printRef.current;
        if (!element) return;

        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          height: element.scrollHeight,
          windowHeight: element.scrollHeight,
        });

        const data = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;
        const imgHeightInPdf = pdfWidth / ratio;
        let heightLeft = imgHeightInPdf;
        let position = 0;

        pdf.addImage(data, "PNG", 0, position, pdfWidth, imgHeightInPdf);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
          position = -(imgHeightInPdf - heightLeft);
          pdf.addPage();
          pdf.addImage(data, "PNG", 0, position, pdfWidth, imgHeightInPdf);
          heightLeft -= pdfHeight;
        }

        pdf.save(`progreso_campana_${operSel}_${mesSel}-${anoSel}.pdf`);
        setIsPrinting(false);
      };
      print();
    }
  }, [isPrinting]);

  const mergedData = {};

  asignado.forEach((item) => {
    mergedData[item.idcampana] = {
      idcampana: item.idcampana,
      descripcion: item.descripcion,
      asig: item.asig,
      trab: 0, // Initialize worked cases to 0
    };
  });

  trabajado.forEach((item) => {
    if (mergedData[item.idcampana]) {
      mergedData[item.idcampana].trab = item.trab;
    } else {
      // Handle case where worked cases exist but no assigned cases (unlikely but good to be robust)
      mergedData[item.idcampana] = {
        idcampana: item.idcampana,
        descripcion: item.descripcion,
        asig: 0,
        trab: item.trab,
      };
    }
  });

  const finalCampanasData = Object.values(mergedData);

  // For Bar Chart
  const labels = finalCampanasData.map((c) => c.descripcion);
  const assignedCounts = finalCampanasData.map((c) => c.asig);
  const workedCounts = finalCampanasData.map((c) => c.trab);

  // For Doughnut Chart (overall progress)
  const totalAsignado = assignedCounts.reduce((sum, val) => sum + val, 0);
  const totalTrabajado = workedCounts.reduce((sum, val) => sum + val, 0);
  const totalPendiente = totalAsignado - totalTrabajado;

  // --- Procesamiento de datos para el gráfico de gestiones ---
  const accionesUnicas = [...new Set(gestiones.map(g => g.accion))];
  const campanasUnicas = [...new Set(gestiones.map(g => g.descripcion))];

  const coloresAcciones = accionesUnicas.reduce((acc, _, index) => {
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    acc[_] = `rgba(${r}, ${g}, ${b}, 0.5)`;
    return acc;
  }, {});

  const gestionesDatasets = accionesUnicas.map(accion => ({
    label: accion,
    data: campanasUnicas.map(campana => {
      const item = gestiones.find(g => g.descripcion === campana && g.accion === accion);
      return item ? item.gestiones : 0;
    }),
    backgroundColor: coloresAcciones[accion],
  }));

  const gestionesBarData = {
    labels: campanasUnicas,
    datasets: gestionesDatasets,
  };

  const gestionesBarOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Distribución de Gestiones por Campaña',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  // --- Datos para la tabla de resumen de gestiones ---
  const resumenGestiones = accionesUnicas.map(accion => ({
    accion: accion,
    total: gestiones.filter(g => g.accion === accion).reduce((sum, g) => sum + g.gestiones, 0),
  })).sort((a, b) => b.total - a.total);

  // Datos para la tabla detallada
  const tableData = finalCampanasData.map((c) => ({
    idcampana: c.idcampana,
    descripcion: c.descripcion,
    asig: c.asig,
    trab: c.trab,
    pendiente: c.asig - c.trab,
    progreso: c.asig > 0 ? ((c.trab / c.asig) * 100).toFixed(2) : 0,
  }));

  // Estado y memoización para la tabla de datos
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Asignados",
        data: assignedCounts,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Trabajados",
        data: workedCounts,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ["Trabajados", "Pendientes"],
    datasets: [
      // Usamos los totales generales para el gráfico de torta
      {
        label: "Distribución de Casos",
        data: [totalTrabajado, totalPendiente],
        backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 99, 132, 0.5)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Casos Asignados y Trabajados por Campaña",
      },
    },
    scales: {
      x: {
        stacked: false, // Para barras lado a lado
      },
      y: {
        stacked: false,
        beginAtZero: true,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Progreso General de Casos",
      },
    },
  };

  const columns = [
    {
      name: "Campaña",
      selector: (row) => row.descripcion,
      sortable: true,
      grow: 0.3,
    },
    {
      name: "Asignados",
      selector: (row) => row.asig,
      sortable: true,
      grow: 0.15,
    },
    {
      name: "Trabajados",
      selector: (row) => row.trab,
      sortable: true,
      grow: 0.15,
    },
    {
      name: "Pendientes",
      selector: (row) => row.pendiente,
      sortable: true,
      grow: 0.15,
    },
    {
      name: "Progreso (%)",
      selector: (row) => `${row.progreso}%`,
      sortable: true,
      grow: 0.2,
    },
  ];

  const filteredItems = tableData.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  // Componente de tabla HTML simple para la exportación a PDF
  const SimpleHtmlTable = ({ data }) => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Campaña</th>
            <th className="py-2 px-4 border-b">Asignados</th>
            <th className="py-2 px-4 border-b">Trabajados</th>
            <th className="py-2 px-4 border-b">Pendientes</th>
            <th className="py-2 px-4 border-b">Progreso (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50" style={{ pageBreakInside: 'avoid' }}>
              <td className="py-2 px-4 border-b">{row.descripcion}</td>
              <td className="py-2 px-4 border-b text-center">{row.asig}</td>
              <td className="py-2 px-4 border-b text-center">{row.trab}</td> 
              <td className="py-2 px-4 border-b text-center">{row.pendiente}</td>
              <td className="py-2 px-4 border-b text-center">{row.progreso}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <div className="flex justify-end mt-5 mb-5">
        <Button onClick={handleDownloadPdf}>Exportar a PDF</Button>
      </div>
      <div ref={printRef} className="bg-white p-4 print-container">
        <Card className="mt-6 shadow-none">
          <CardBody>
            <AlertProgreso
              oper={operSel}
              mes={mesSel}
              ano={anoSel}
              asignado={asignado}
              trabajado={trabajado}
              porcenTab={porcenTab}
            />

            <hr className="border-2 mt-6 mb-6" />

            <Typography variant="h5" color="blue-gray" className="mb-4">
              Visualización Gráfica del Progreso
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              <u>Operador</u>: {operSel}
            </Typography>
            <Typography color="gray" className="mt-1 font-normal mb-4">
              <u>Periodo</u>: {mesSel}/{anoSel}
            </Typography>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border rounded-lg">
                <Typography variant="h6" className="mb-2">
                  Comparativa Asignados vs. Trabajados por Campaña
                </Typography>
                <Bar data={barData} options={barOptions} />
              </div>
              <div className="p-4 border rounded-lg">
                <Typography variant="h6" className="mb-2">
                  Distribución General de Casos
                </Typography>
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </div>
            </div>

        <hr className="border-2 mt-6 mb-6" />

        <Typography variant="h5" color="blue-gray" className="mb-4">
          Análisis de Gestiones Realizadas
        </Typography>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 border rounded-lg">
            <Bar data={gestionesBarData} options={gestionesBarOptions} />
          </div>
          <div className="p-4 border rounded-lg">
            <Typography variant="h6" className="mb-2">Resumen Total de Gestiones</Typography>
            <div className="overflow-y-auto h-64">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b">Tipo de Gestión</th>
                    <th className="py-2 px-4 border-b">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {resumenGestiones.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{item.accion}</td>
                      <td className="py-2 px-4 border-b text-center">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

            <hr className="border-2 mt-6 mb-6" />

            <Typography variant="h5" color="blue-gray" className="mb-4">
              Detalle de Progreso por Campaña
            </Typography>
            {tableData.length === 0 ? (
              <Typography className="text-center mt-4">
                No hay datos de campañas para mostrar.
              </Typography>
            ) : isPrinting ? (
              <SimpleHtmlTable data={tableData} />
            ) : (
              <DataTable
                columns={columns}
                data={filteredItems}
                defaultSortFieldId={1}
                striped
                pagination
                subHeader
                subHeaderComponent={subHeaderComponent}
              />
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default GraficosProgreso;
