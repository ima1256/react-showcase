import "./Cars.scss";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { useEffect, useState, Fragment } from "react";
import { cars } from "../../fakeData";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Favorite from "@mui/icons-material/Favorite";
import { FavoriteBorder, List } from "@mui/icons-material";
import { withSeparators } from "react-list-separator";
import StarIcon from "@mui/icons-material/Star";

const Cars = () => {
  const [carsData, setCarsData] = useState(cars);

  useEffect(() => {
    console.log(carsData);
  }, []);

  return (
    <div className="h-[calc(100%-64px)] w-full flex justify-center items-center bg-red-300">
      <div className="scrollable max-h-full bg-red-500 w-[750px] h-[300px] p-3 rounded-md">
        <Stack spacing={2} className="cars">
          {Array.from({ length: 22 }, () => carsData[0]).map((car, index) => (
            <Car key={index} carData={car}></Car>
          ))}
        </Stack>
      </div>
    </div>
  );
};

const CarPrice = ({ carData }) => {
  return (
    <Stack direction="row" spacing={3} className="price pr-6">
      <Stack spacing={1} className="price-wrap flex-1 justify-around">
        <Stack spacing={1} alignItems='flex-start'>
          <Typography
            sx={{ fontWeight: 700, lineHeight: 1, fontSize: "13px"}}
            className="text-[#666666]"
            component="div"
          >
            Precio justo
          </Typography>
          <div className="rounded-xl h-[3px] gap-1 flex flex-row overflow-hidden w-full">
            {Array.from({ length: 5 }, () => {}).map((elem, index) => (
              <div
                className={`${
                  index < 3 ? "bg-green-700" : "bg-gray-300"
                } h-full flex-1`}
              ></div>
            ))}
          </div>
        </Stack>
        <Typography
          sx={{ fontWeight: "700", lineHeight: 1 }}
          color="error"
          variant="h5"
          component="span"
        >
          {carData.price.cash_price}
        </Typography>
      </Stack>
      <Stack className="financed-price-wrap justify-between">
        <Typography
          sx={{ fontWeight: 600, lineHeight: 1, fontSize: "13px" }}
          className="text-[#666666]"
        >
          Precio financiado: {carData.price.financed_price}
        </Typography>
        <Typography sx={{ fontWeight: "700", lineHeight: 1 }} variant="h5">
          {carData.price.monthly_payment}
        </Typography>
      </Stack>
    </Stack>
  );
};

const DotSeparator = () => {
  return (
    <svg
      width="2"
      height="2"
      viewBox="0 0 2 2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1" cy="1" r="1" fill="currentColor" />
    </svg>
  );
};

const ContaminationCarSign = () => {
  const signRadius = 15;

  return (
    <svg
      width={signRadius}
      height={signRadius}
      viewBox={`0 0 ${signRadius} ${signRadius}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={signRadius / 2}
        cy={signRadius / 2}
        r={signRadius / 2}
        fill="green"
      ></circle>
      <text
        x="50%"
        y="50%"
        dy="0.08em"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="black"
        fontSize="12"
      >
        C
      </text>
    </svg>
  );
};

const CarSpecifics = ({ carData }) => {
  const keys = Object.keys(carData.details);

  return (
    <Stack spacing={1}>
      <Stack direction="row" className="items-center justify-start" spacing={1}>
        <div className="inline-flex w-[14px] h-[14px] text-[10px] font-bold text-black bg-green-600 items-center leading-none justify-center rounded-full">
          C
        </div>
        {/* <ContaminationCarSign /> */}
        <Stack
          className="text-[#666666] text-xs justify-center items-center"
          direction="row"
          spacing={1}
        >
          {keys.map((key, index) => (
            <Fragment>
              <span>{carData.details[key]}</span>
              {index < keys.length - 1 && <DotSeparator />}
            </Fragment>
          ))}
        </Stack>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        className="text-xs text-[#666666] items-center bg-gray-200 py-0.5 px-1 rounded-md w-fit"
      >
        <span className="leading-none">Profesional</span>
        <span className="leading-none">
          {carData.dealer_info.professional_rating}
        </span>
        <StarIcon sx={{ fontSize: "14px" }} className="text-yellow-500" />
      </Stack>
    </Stack>
  );
};

const Car = ({ carData }) => {
  const imageHeight = "200px";

  return (
    <Card
      sx={{
        fontFamily: '"Poppins", Helvetica, sans-serif',
      }}
      className="h-full w-full flex flex-col"
    >
      <div className="top-card flex flex-row w-full">
        <CardMedia
          sx={{
            height: imageHeight,
            width: imageHeight,
          }}
          image="/static/images/car.jpg"
        />
        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
          <Stack className="w-full" spacing={2}>
            <Stack
              direction={"row"}
              className="top-card-content justify-between w-full pb-2"
            >
              <Typography
                sx={{
                  fontWeight: 600,
                }}
                className="flex w-fit"
                variant="h7"
                component="div"
              >
                {carData.title}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                className="icons w-fit items-center"
              >
                <DeleteOutlineOutlinedIcon />
                <FavoriteBorder className="text-red-500" />
              </Stack>
            </Stack>
            <Stack direction="row" className="middle-card-content">
              <CarPrice carData={carData} />
              <Divider orientation="vertical" flexItem />
              <Stack className="text-green-700 text-sm justify-between p-2 pl-6">
                <span>Garantía 1 año</span>
                <span>IVA incluido</span>
              </Stack>
              {/* <div>dfsdf</div> */}
            </Stack>
            <CarSpecifics carData={carData} className="pb-2" />
          </Stack>
        </CardContent>
      </div>
      <Divider />
      <div className="bottom-card flex flex-row w-full py-2 px-3 justify-end">
        <Stack
          className="text-[#666666] text-xs justify-center items-center"
          direction="row"
          spacing={1}
        >
          {Object.keys(carData.financing_terms).map((key, index) => (
            <Fragment>
              {key !== "interest_rate" ? (
                <span className="">{carData.financing_terms[key]}</span>
              ) : (
                <div>
                  <span className="text-black underline font-semibold">
                    Ver Ejemplo {carData.financing_terms[key]}
                  </span>
                  <span className="px-1.5">con</span>
                </div>
              )}
              {index < Object.keys(carData.financing_terms).length - 1 && (
                <DotSeparator />
              )}
            </Fragment>
          ))}
        </Stack>
        <figure>
          <picture>
            <img
              height={16}
              width={60}
              src="https://s.ccdn.es/images/common/logos/santander.svg"
            ></img>
          </picture>
        </figure>
      </div>
    </Card>
  );
};

export default Cars;
