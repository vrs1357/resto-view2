import { Int32 } from "mongodb";
import Image from "next/image";
import React from 'react';
import Chart, { chart } from 'react-google-charts';
const { MongoClient, ObjectId } = require('mongodb');
type objType = {
  _id: ObjectId
  Number: Int32
  Score: Number
  Date: Int32
  };
async function createBarChart() {
  // const svgRef = useRef();
  let arr1, arr2, arr3, arr4, arr5, arr6, arr7;
  let date: any = new Date();
  const startYear = new Date(date.getFullYear(), 0,0);
  const diffMilliseconds = date.getTime() - startYear.getTime();
  const daysSinceStartOfYear = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

  var day1 = new Array();
  var day2 = new Array();
  var day3 = new Array();
  var day4 = new Array();
  var day5 = new Array();
  var day6 = new Array();
  var day7 = new Array();
  // obtaining data
arr1 = await dbReader(daysSinceStartOfYear - 1);
  if(arr1) {
    arr1.forEach((review: any) => {
      day1.push(review.Score);
    })
  }
  arr2 = await dbReader(daysSinceStartOfYear - 2);
  if(arr2) {
    arr2.forEach((review: any) => {
      day2.push(review.Score);
    })
  }
  arr3 = await dbReader(daysSinceStartOfYear - 3);
  if(arr3) {
    arr3.forEach((review: any) => {
      day3.push(review.Score);
    })
  }
  arr4 = await dbReader(daysSinceStartOfYear - 4);
  if(arr4) {
    arr4.forEach((review: any) => {
      day4.push(review.Score);
    })
  }
  arr5 = await dbReader(daysSinceStartOfYear - 5);
  if(arr5) {
    arr5.forEach((review: any) => {
      day5.push(review.Score);
    })
  }
  arr6 = await dbReader(daysSinceStartOfYear - 6);
  if(arr6) {
    arr6.forEach((review: any) => {
      day6.push(review.Score);
    })
  }
  arr7 = await dbReader(daysSinceStartOfYear - 7);
  if(arr7) {
    arr7.forEach((review: any) => {
      day7.push(review.Score);
    })
  }
  // calculating data
  let numpos = 0;
  let numNeg = 0;
  let total = 0;
  for(var i = 0; i < day1.length; i++){
    if(day1.at(i) >= 3){
      numpos++;
    } else {
      numNeg++;
    }
    total++;
  }
  // Collating Data
  var data0 = ["Date", "Total Reviews"];
  var data1 = [date.getDate(), total];
  var data00 = ["Date", "Positive Reviews"];
  var data11 = [date.getDate(), numpos];
  var data000 = ["Date", "Negative Reviews"];
  var data111 = [date.getDate(), numNeg];
  
  numpos = 0;
  numNeg = 0;
  total = 0;
  for(var i = 0; i < day2.length; i++){
    if(day2.at(i) >= 3){
      numpos++;
    } else {
      numNeg++;
    }
    total++;
  }
  var data2 = [date.getDate(), total];
  var data22 = [date.getDate(), numpos];
  var data222 = [date.getDate(), numNeg];

  numpos = 0;
  numNeg = 0;
  total = 0;
  for(var i = 0; i < day3.length; i++){
    if(day3.at(i) >= 3){
      numpos++;
    } else {
      numNeg++;
    }
    total++;
  }
  var data3 = [date.getDate(), total];
  var data33 = [date.getDate(), numpos];
  var data333 = [date.getDate(), numNeg];

  numpos = 0;
  numNeg = 0;
  total = 0;
  for(var i = 0; i < day4.length; i++){
    if(day4.at(i) >= 3){
      numpos++;
    } else {
      numNeg++;
    }
    total++;
  }
  var data4 = [date.getDate(), total];
  var data44 = [date.getDate(), numpos];
  var data444 = [date.getDate(), numNeg];

  numpos = 0;
  numNeg = 0;
  total = 0;
  for(var i = 0; i < day5.length; i++){
    if(day5.at(i) >= 3){
      numpos++;
    } else {
      numNeg++;
    }
    total++;
  }
  var data5 = [date.getDate(), total];
  var data55 = [date.getDate(), numpos];
  var data555 = [date.getDate(), numNeg];

  numpos = 0;
  numNeg = 0;
  total = 0;
  for(var i = 0; i < day6.length; i++){
    if(day6.at(i) >= 3){
      numpos++;
    } else {
      numNeg++;
    }
    total++;
  }
  var data6 = [date.getDate(), total];
  var data66 = [date.getDate(), numpos];
  var data666 = [date.getDate(), numNeg];

  numpos = 0;
  numNeg = 0;
  total = 0;
  for(var i = 0; i < day7.length; i++){
    if(day7.at(i) >= 3){
      numpos++;
    } else {
      numNeg++;
    }
    total++;
  }
  var data7 = [date.getDate(), total];
  var data77 = [date.getDate(), numpos];
  var data777 = [date.getDate(), numNeg];

  const totalData = [data0, data1, data2, data3, data4, data5, data6, data7];
  
  const options = {
    chart: {
      title: "Total Reviews over Time"
    },
  };
  return (
      <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data = {totalData}
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
      let reviews = database.collection('reviews');
      const query = {Date:request};
      const toReturn = await reviews.find(query).toArray();
      await client.close();
      return toReturn;
  } catch {
    await client.close();
    console.log("error - see stack trace");
    return new Array(0);
  }
  
}

export default function restaurantView() {

  createBarChart();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
    <div className = "flex flex-col">
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
              <div className="flex flex-wrap gap-5 items-start mt-6 mr-7 ml-7 mb-7 text-3xl whitespace-nowrap max-md:mx-2.5">
                <div className="flex flex-1 gap-2 items-center text-green-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44a826a89ae7583af2391018ba6bbd01e55b7748fffbba41551809abced3e723?"
                    className="shrink-0 self-stretch aspect-square w-[50px]"
                  />
                  {/* TODO: replace number with correct value */}
                  <div className="self-stretch my-auto mr-9">87.4%</div>
                 
                </div>
                <div className="flex flex-1 gap-2 items-center text-red-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40c47ea288642368cc6a1a869b262f374f038755926a96abc18259cc836bd56?"
                    className="shrink-0 self-stretch aspect-square w-[50px]"
                  />
                  {/* TODO: replace number with correct value */}
                  <div className="self-stretch my-auto mr-7">12.6%</div>
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
                <div className="grow text-6xl text-black max-md:text-4xl">
                  748
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
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full drop-shadow-lg" >
            <div className="flex flex-col grow items-center mx-auto w-full bg-white rounded-xl shadow-sm max-md:mt-10 border-b-6 border-zinc-400">
              <div className="m-auto">
              <div className="text-2xl font-semibold text-black">
                Average Rating
              </div>
              <div className="flex gap-3.5 mt-3.5 whitespace-nowrap">
                {/* TODO: replace number with correct value */}
                <div className="grow text-6xl text-blue-500 max-md:text-4xl">
                  4.3
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
              {/* TODO: fix value */}
              <div className="self-center mt-5 text-6xl max-md:text-4xl mb-10 mr-20">
                +91
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
                <div className="mt-2 text-4xl ml-4">84%</div>
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
                {/* TODO: fix value */}
                <div className="text-lg">Detractors</div>
                <div className="self-center mt-2 ml-4 text-4xl">8%</div>
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
                {/* TODO: Fix value */}
                <div className="text-lg">Passive</div>
                <div className="mt-2 ml-4 text-4xl">4%</div>
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
              <div>graph</div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-black max-md:mt-9 max-md:max-w-full">
              <div className="text-2xl font-medium max-md:max-w-full">
                Detailed Customer Analytics
              </div>
              {/* TODO: better table data representation, also better way to do in general(d3.js?) */}
              <div className="flex flex-col px-1.5 py-6 mt-3.5 bg-white rounded-xl border border-solid border-neutral-400 max-md:max-w-full">
                <div className="flex gap-5 items-start whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="self-stretch my-auto text-base font-medium">
                    Gender
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-xs font-light">Male</div>
                    <div className="mt-3 text-base">53.6%</div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-xs font-light">Female</div>
                    <div className="mt-2.5 text-base">40.4%</div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-xs font-light">Unspecified</div>
                    <div className="self-center mt-2 text-base">6%</div>
                  </div>
                </div>
                <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 items-start mt-5 mr-3.5 ml-3.5 max-md:mx-2.5">
                  <div className="grow self-stretch my-auto text-base font-medium">
                    Diners
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-light">
                      Business Associates
                    </div>
                    <div className="self-center mt-2 text-base">17.4%</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-light">Family & Friends</div>
                    <div className="self-start mt-1.5 ml-3 text-base max-md:ml-2.5">
                      80.2%
                    </div>
                  </div>
                  <div className="flex flex-col whitespace-nowrap">
                    <div className="text-xs font-light">Unspecified</div>
                    <div className="mt-1.5 text-base">2.4%</div>
                  </div>
                </div>
                <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 mt-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="grow self-start mt-3 text-base font-medium">
                    Special Days
                  </div>
                  <div className="flex flex-col whitespace-nowrap">
                    <div className="text-xs font-light">Birthday</div>
                    <div className="mt-2 text-base">48.8%</div>
                  </div>
                  <div className="flex flex-col self-start whitespace-nowrap">
                    <div className="text-xs font-light">Anniversary</div>
                    <div className="mt-2 text-base">21.4%</div>
                  </div>
                  <div className="flex flex-col whitespace-nowrap">
                    <div className="text-xs font-light">Valentines</div>
                    <div className="mt-3 text-base">29.8%</div>
                  </div>
                </div>
                <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 mt-5 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="my-auto text-base font-medium">Contacts</div>
                  <div className="flex flex-col">
                    <div className="text-xs font-light">Email</div>
                    <div className="mt-2.5 text-base">91.3%</div>
                  </div>
                  <div className="flex flex-col self-start">
                    <div className="flex gap-5 justify-between text-xs font-light">
                      <div>Mobile</div>
                      <div>Social</div>
                    </div>
                    <div className="flex gap-5 justify-between mt-2 text-base">
                      <div>5.6%</div>
                      <div>3.1%</div>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 mt-5 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
                <div className="flex gap-5 items-start mt-5 max-md:flex-wrap max-md:pr-5">
                  <div className="mt-2.5 text-base font-medium">Meal Types</div>
                  <div className="flex flex-col whitespace-nowrap">
                    <div className="text-xs font-light">Lunch</div>
                    <div className="mt-2 text-base">53.6%</div>
                  </div>
                  <div className="flex flex-col self-stretch whitespace-nowrap">
                    <div className="text-xs font-light">Dinner</div>
                    <div className="mt-2 text-base">46.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </main>
  );
}

