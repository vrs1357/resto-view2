import { Int32 } from "mongodb";
import Image from "next/image";
import React from "react";
import Chart from "./chart";
import { create } from "domain";
const { MongoClient, ObjectId } = require("mongodb");
var totalFeedback: number;
var happyPPl: number;
var sadPPl: number;
var totalRating: number;
var netPromoterScore: number;
var numPromoters: number;
var numDemoters: number;
const graphType = 0;
async function createBarChart(type: Number) {
  happyPPl = 0;
  sadPPl = 0;
  totalFeedback = 0;
  totalRating = 0;
  numPromoters = 0;
  numDemoters = 0;

  // const svgRef = useRef();
  let arr1, arr2, arr3, arr4, arr5, arr6, arr7;
  let date: any = new Date();
  const startYear = new Date(date.getFullYear(), 0, 0);
  const diffMilliseconds = date.getTime() - startYear.getTime();
  const daysSinceStartOfYear = Math.floor(
    diffMilliseconds / (1000 * 60 * 60 * 24)
  );

  var day1 = new Array();
  var day2 = new Array();
  var day3 = new Array();
  var day4 = new Array();
  var day5 = new Array();
  var day6 = new Array();
  var day7 = new Array();
  // obtaining data
  arr1 = await dbReader(daysSinceStartOfYear - 1);
  if (arr1) {
    arr1.forEach((review: any) => {
      day1.push(review.Score);
      totalRating += review.Score;
    });
  }
  arr2 = await dbReader(daysSinceStartOfYear - 2);
  if (arr2) {
    arr2.forEach((review: any) => {
      day2.push(review.Score);
      totalRating += review.Score;
    });
  }
  arr3 = await dbReader(daysSinceStartOfYear - 3);
  if (arr3) {
    arr3.forEach((review: any) => {
      day3.push(review.Score);
      totalRating += review.Score;
    });
  }
  arr4 = await dbReader(daysSinceStartOfYear - 4);
  if (arr4) {
    arr4.forEach((review: any) => {
      day4.push(review.Score);
      totalRating += review.Score;
    });
  }
  arr5 = await dbReader(daysSinceStartOfYear - 5);
  if (arr5) {
    arr5.forEach((review: any) => {
      day5.push(review.Score);
      totalRating += review.Score;
    });
  }
  arr6 = await dbReader(daysSinceStartOfYear - 6);
  if (arr6) {
    arr6.forEach((review: any) => {
      day6.push(review.Score);
      totalRating += review.Score;
    });
  }
  arr7 = await dbReader(daysSinceStartOfYear - 7);
  if (arr7) {
    arr7.forEach((review: any) => {
      day7.push(review.Score);
      totalRating += review.Score;
    });
  }
  // calculating data
  let numpos = 0;
  let numNeg = 0;
  let total = 0;
  for (var i = 0; i < day1.length; i++) {
    if (day1.at(i) >= 3) {
      numpos++;
      if(day1.at(i) > 4) {
        numPromoters++;
      }
    } else {
      if(day1.at(i) < 2){
        numDemoters++;
      }
      numNeg++;
    }
    total++;
  }
  // Collating Data
  var data0 = ["Date", "Total Reviews"];
  var data1 = [date.getDate() - 1, total];
  var data00 = ["Date", "Positive Reviews", "Negative Reviews"];
  var data11 = [date.getDate() - 1, numpos, numNeg];

  happyPPl += numpos;
  sadPPl += numNeg;
  totalFeedback += total;
  numpos = 0;
  numNeg = 0;
  total = 0;
  for (var i = 0; i < day2.length; i++) {
    if (day2.at(i) >= 3) {
      numpos++;
      if(day2.at(i) > 4) {
        numPromoters++;
      }
    } else {
      if(day2.at(i) < 2){
        numDemoters++;
      }
      numNeg++;
    }
    total++;
  }
  var data2 = [date.getDate() - 2, total];
  var data22 = [date.getDate() - 2, numpos, numNeg];
  happyPPl += numpos;
  sadPPl += numNeg;
  totalFeedback += total;
  numpos = 0;
  numNeg = 0;
  total = 0;
  for (var i = 0; i < day3.length; i++) {
    if (day3.at(i) >= 3) {
      numpos++;
      if(day3.at(i) > 4) {
        numPromoters++;
      }
    } else {
      if(day3.at(i) < 2){
        numDemoters++;
      }
      numNeg++;
    }
    total++;
  }
  var data3 = [date.getDate() - 3, total];
  var data33 = [date.getDate() - 3, numpos, numNeg];
  happyPPl += numpos;
  sadPPl += numNeg;
  totalFeedback += total;
  numpos = 0;
  numNeg = 0;
  total = 0;
  for (var i = 0; i < day4.length; i++) {
    if (day4.at(i) >= 3) {
      numpos++;
      if(day4.at(i) > 4) {
        numPromoters++;
      }
    } else {
      if(day4.at(i) < 2){
        numDemoters++;
      }
      numNeg++;
    }
    total++;
  }
  var data4 = [date.getDate() - 4, total];
  var data44 = [date.getDate() - 4, numpos, numNeg];
  happyPPl += numpos;
  sadPPl += numNeg;
  totalFeedback += total;
  numpos = 0;
  numNeg = 0;
  total = 0;
  for (var i = 0; i < day5.length; i++) {
    if (day5.at(i) >= 3) {
      numpos++;
      if(day5.at(i) > 4) {
        numPromoters++;
      }
    } else {
      if(day5.at(i) < 2){
        numDemoters++;
      }
      numNeg++;
    }
    total++;
  }
  var data5 = [date.getDate() - 5, total];
  var data55 = [date.getDate() - 5, numpos, numNeg];
  happyPPl += numpos;
  sadPPl += numNeg;
  totalFeedback += total;
  numpos = 0;
  numNeg = 0;
  total = 0;
  for (var i = 0; i < day6.length; i++) {
    if (day6.at(i) >= 3) {
      numpos++;
      if(day6.at(i) > 4) {
        numPromoters++;
      }
    } else {
      if(day6.at(i) < 2){
        numDemoters++;
      }
      numNeg++;
    }
    total++;
  }
  var data6 = [date.getDate() - 6, total];
  var data66 = [date.getDate() - 6, numpos, numNeg];
  happyPPl += numpos;
  sadPPl += numNeg;
  totalFeedback += total;
  numpos = 0;
  numNeg = 0;
  total = 0;
  for (var i = 0; i < day7.length; i++) {
    if (day7.at(i) >= 3) {
      numpos++;
      if(day7.at(i) > 4) {
        numPromoters++;
      }
    } else {
      if(day7.at(i) < 2){
        numDemoters++;
      }
      numNeg++;
    }
    total++;
  }
  var data7 = [date.getDate() - 7, total];
  var data77 = [date.getDate() - 7, numpos, numNeg];
  happyPPl += numpos;
  sadPPl += numNeg;
  totalFeedback += total;
  console.log(happyPPl, sadPPl, totalFeedback)
  const totalData = [data0, data1, data2, data3, data4, data5, data6, data7];

  const posnegData = [data00, data11, data22, data33, data44, data55, data66, data77];

  const options = {
    chart: {
      title: "Total Reviews over Time",
      hAxis: {
        title: "Total Population",
        minValue: data7[0],
        maxValue: data1[0],
      },
      colors: ['green'],
    },
  };
  
  if(type == 0){
    const options = {
      chart: {
        title: "Total Reviews over Time",
        hAxis: {
          title: "Total Population",
          minValue: data7[0],
          maxValue: data1[0],
        },
        colors: ['blue'],
      },
    };
    return (
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={totalData}
        options={options}
      />
    );
  }
  else if(type == 1){
    const options = {
      chart: {
        title: "Pos/Neg Reviews over Time",
        hAxis: {
          title: "Total Population",
          minValue: data7[0],
          maxValue: data1[0],
        },
        colors: ['green', 'red'],
      },
    };
    return (
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={posnegData}
        options={options}
      />
    );
  }
    return (
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={totalData}
        options={options}
      />
    );
  }
  

async function dbReader(request: any) {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  try {
    let database = client.db("resto-view-db");
    await client.connect();
    console.log("Connected to DB");
    let reviews = database.collection("reviews");
    const query = { Date: request };
    const toReturn = await reviews.find(query).toArray();
    await client.close();
    return toReturn;
  } catch {
    await client.close();
    console.log("error - see stack trace");
    return new Array(0);
  }
}

export default async function restaurantView() {

  const graph = await createBarChart(0);

  const graph2 = await createBarChart(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 m-auto">
      <div className="flex flex-col">
        {/* PAGE HEADER */}
        <div className="flex gap-5 max-md:flex-wrap">
          <div className="flex-auto my-auto text-3xl font-semibold text-black">
            Feedback Overview
          </div>
          <div className="flex gap-5 justify-between text-lg text-blue-500">
            <div className="flex gap-4 px-3.5 py-2 bg-white border border-solid border-neutral-400 rounded-md">
              <div className="flex-auto">Monthly ROI</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cacafd82b00351889dc98c66153e26a09297173d2232fbe31e23b206ab96df75?"
                className="rotate-180 shrink-0 my-auto w-2 aspect-square fill-black stroke-[1px] stroke-black"
              />
            </div>
            {/* TODO: efficient implementation of dropdown menu (why tf it so hard) */}
            <div className="flex gap-3.5 px-3.5 py-2 bg-white border border-solid border-neutral-400 rounded-md">
              <div className="grow">Acquisition Sources</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cacafd82b00351889dc98c66153e26a09297173d2232fbe31e23b206ab96df75?"
                className="rotate-180 shrink-0 my-auto w-2 aspect-square fill-black stroke-[1px] stroke-black"
              />
            </div>
          </div>
        </div>

        {/* HIGHLIGHTED ANALYTICS */}
        <div className="flex flex-col mt-10">
          <div className="px-5 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full drop-shadow-lg">
                <div className="flex flex-col grow pt-6 mx-auto w-full bg-white rounded-xl shadow-sm max-md:mt-10 border-b-6 border-zinc-400">
                  <div className="mx-8 text-lg font-medium text-black max-md:mx-2.5">
                    Customer Feedback over the past week
                  </div>
                  <div className="flex flex-row gap-5 items-start mt-6 mr-0 ml-0 mb-7 text-2xl whitespace-nowrap max-md:mx-2.5">
                    <div className="flex flex-1 gap-2 items-center text-green-600">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44a826a89ae7583af2391018ba6bbd01e55b7748fffbba41551809abced3e723?"
                        className="shrink self-stretch aspect-square w-[50px] ml-3"
                      />
                      <div className="self-stretch shrink my-auto mr-6">{Math.round(happyPPl*100/totalFeedback)}%</div>
                    </div>
                    <div className="flex flex-1 gap-2 items-center text-red-500">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40c47ea288642368cc6a1a869b262f374f038755926a96abc18259cc836bd56?"
                        className="shrink self-stretch aspect-square w-[50px]"
                      />
                      {/* TODO: replace number with correct value */}
                      <div className="self-stretch shrink my-auto mr-6">{Math.round(sadPPl*100/totalFeedback)}%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full drop-shadow-lg">
                <div className="flex flex-col grow items-center mx-auto w-full bg-white rounded-xl shadow-sm max-md:mt-10 border-b-6 border-blue-500">
                  <div className="m-auto">
                    <div className="text-2xl font-semibold text-black">
                      Total Feedback
                    </div>
                    <div className="flex gap-3 mt-5 whitespace-nowrap">
                      {/* TODO: replace number with correct value */}
                      <div className="grow text-6xl text-black max-md:text-4xl ml-8">
                        {totalFeedback}
                      </div>
                      <div className="flex gap-1.5 self-end mt-8 text-base text-green-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80d2f014ca2edd76d94714a3c3dd7fcbc0b60351c58129f7e943dc9698c098dc?"
                          className="shrink-0 self-start aspect-square fill-green-600 w-[9px] mt-2"
                        />
                        {/* TODO: replace number with correct value */}
                        <div>5.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full drop-shadow-lg">
                <div className="flex flex-col grow items-center mx-auto w-full bg-white rounded-xl shadow-sm max-md:mt-10 border-b-6 border-zinc-400">
                  <div className="m-auto">
                    <div className="text-2xl font-semibold text-black">
                      Average Rating
                    </div>
                    <div className="flex gap-3.5 mt-3.5 whitespace-nowrap">
                      {/* TODO: replace number with correct value */}
                      <div className="grow text-6xl text-blue-500 max-md:text-4xl ml-12">
                        {(totalRating/totalFeedback).toFixed(2)}
                      </div>
                      <div className="flex flex-1  gap-1.5 self-end mt-8 text-base text-green-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80d2f014ca2edd76d94714a3c3dd7fcbc0b60351c58129f7e943dc9698c098dc?"
                          className="shrink-0 self-start aspect-square fill-green-600 w-[9px] align-bottom mt-2"
                        />
                        {/* TODO: replace number with correct value */}
                        <div>0.47%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebdd880f05929e25e18df6a2e2ce8254315ac94009e6baac909967069d933be?"
            className="z-10 self-center w-4 aspect-[0.84] fill-blue-500"
          />
        </div>

        {/* MAIN ANALYTICS */}
        <div className="flex flex-col pb-3.5">
          <div className="w-full bg-blue-500 min-h-[7px] max-md:max-w-full" />
          <div className="z-10 justify-center items-start px-5 py-6 w-full text-2xl font-semibold text-black whitespace-nowrap bg-blue-50 max-md:pr-5 max-md:max-w-full rounded-md">
            Analytics
          </div>
          <div className="justify-center items-center px-16 py-2 w-full text-lg font-semibold text-white bg-blue-900 rounded-xl max-md:px-5 max-md:max-w-full">
            NET PROMOTER SCORE
          </div>
          <div className="w-full bg-white min-h-[30px] max-md:max-w-full" />
          <div className="self-center px-5 mt-2 w-full max-w-[954px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-black max-md:mt-10 ">
                  <div className="text-2xl font-medium">Net Promoter Score</div>
                  <div className="mt-1 text-md">% Promoters - % Detractors</div>
                  <div className="self-center mt-5 text-6xl max-md:text-4xl mb-10 mr-20">
                    +{Math.round((numPromoters - numDemoters)*100/(numPromoters+numDemoters))}
                  </div>
                </div>
              </div>
              <div className="h-40 w-1 bg-black"></div>
              <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-0 items-start self-stretch my-auto text-black whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca12dd765bdb37610e8f4dc6a195176b70f811f5b0903ed2d933d2a01b33046c?"
                    className="shrink-0 mt-6 aspect-square w-[50px]"
                  />
                  {/* TODO: Fix value */}
                  <div className="flex flex-col">
                    <div className="text-lg">Promoters</div>
                    <div className="mt-2 text-4xl ml-4">{Math.round(numPromoters*100/(numDemoters+numPromoters))}%</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-0 self-stretch my-auto text-black whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f1f0d28e3b3babfd809be6aab75265b53d97bb309e53a466cee422ed726b72a?"
                    className="shrink-0 self-start aspect-square w-[50px] mt-6"
                  />
                  <div className="flex flex-col">
                    <div className="text-lg">Detractors</div>
                    <div className="self-center mt-2 ml-4 text-4xl">{Math.round(numDemoters*100/(numPromoters+numDemoters))}%</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-0 self-stretch my-auto text-black whitespace-nowrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbc33a071aa6a7e9174877c6fe5f0f4ec8a8b110788769b7d786939256494b4f?"
                    className="shrink-0 self-start aspect-square w-[50px] mt-6"
                  />
                  <div className="flex flex-col">
                    <div className="text-lg">Passive</div>
                    <div className="mt-2 ml-4 text-4xl">0%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DATA ANALYTICS */}
        <div className="flex flex-col">
          <div className="justify-center items-center px-16 py-2.5 w-full text-lg font-semibold text-white bg-blue-900 max-md:px-5 max-md:max-w-full rounded-xl">
            FEEDBACK TRENDS
          </div>
          <div className="self-center mt-4 w-full max-w-[1020px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {/* TODO: d3.js Graphs GO HERE */}
              {graph}
              {graph2}
              <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch px-5 my-auto text-black max-md:mt-9 max-md:max-w-full">
                  
                  {/* TODO: better table data representation, also better way to do in general(d3.js?) */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

