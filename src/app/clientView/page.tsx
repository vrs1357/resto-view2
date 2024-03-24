import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className = "flex flex-col">
      {/* PAGE HEADER */}
      <div className="flex gap-5 max-md:flex-wrap">
      <div className="flex-auto my-auto text-2xl font-semibold text-black">
        Feedback Overview
      </div>
      <div className="flex gap-5 justify-between text-lg text-blue-500">
        <div className="flex gap-4 px-3.5 py-2 bg-white border border-solid border-neutral-400">
          <div className="flex-auto">Monthly ROI</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cacafd82b00351889dc98c66153e26a09297173d2232fbe31e23b206ab96df75?"
            className="shrink-0 my-auto w-2 border border-black border-solid aspect-square fill-black stroke-[1px] stroke-black"
          />
        </div>
        <div className="flex gap-3.5 px-3.5 py-2 bg-white border border-solid border-neutral-400">
          <div className="grow">Acquisition Sources</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cacafd82b00351889dc98c66153e26a09297173d2232fbe31e23b206ab96df75?"
            className="shrink-0 my-auto w-2 border border-black border-solid aspect-square fill-black stroke-[1px] stroke-black"
          />
        </div>
      </div>
    </div>

      {/* HIGHLIGHTED ANALYTICS */}
      <div className="flex flex-col">
      <div className="px-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-6 mx-auto w-full bg-white rounded-xl shadow-sm max-md:mt-10">
              <div className="mx-8 text-lg font-medium text-black max-md:mx-2.5">
                How were customers feeling in past week they visited your
                restaurant?
              </div>
              <div className="flex gap-5 items-start mt-6 mr-7 ml-7 text-3xl whitespace-nowrap max-md:mx-2.5">
                <div className="flex flex-1 gap-2 items-center text-green-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44a826a89ae7583af2391018ba6bbd01e55b7748fffbba41551809abced3e723?"
                    className="shrink-0 self-stretch aspect-square w-[50px]"
                  />
                  {/* TODO: replace number with correct value */}
                  <div className="self-stretch my-auto">87.4%</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0590a4ed977c9428d560a90d586210ea4bfb5765668ac7013e648a716da33f31?"
                    className="shrink-0 self-stretch my-auto w-1.5 aspect-[1.2] fill-black"
                  />
                </div>
                <div className="flex flex-1 gap-2 items-center text-red-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40c47ea288642368cc6a1a869b262f374f038755926a96abc18259cc836bd56?"
                    className="shrink-0 self-stretch aspect-square w-[50px]"
                  />
                  {/* TODO: replace number with correct value */}
                  <div className="self-stretch my-auto">12.6%</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/409988b47bc0706aa1c4c2850d72f1bb7b394bed1f05526c5775c041992d1ce7?"
                    className="shrink-0 self-stretch my-auto w-1.5 aspect-[1.2] fill-black"
                  />
                </div>
              </div>
              <div className="flex flex-col pb-2 mt-5 rounded-lg bg-zinc-400">
                <div className="z-10 shrink-0 h-4 bg-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center pt-10 mx-auto w-full bg-white rounded-xl shadow-sm max-md:mt-10">
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
                    className="shrink-0 self-start aspect-square fill-green-600 w-[9px]"
                  />
                  {/* TODO: replace number with correct value */}
                  <div>5.8%</div>
                </div>
              </div>
              <div className="flex flex-col self-stretch pb-2.5 mt-11 bg-blue-500 rounded-lg max-md:mt-10">
                <div className="z-10 shrink-0 h-4 bg-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center pt-10 mx-auto w-full bg-white rounded-xl shadow-sm max-md:mt-10">
              <div className="text-2xl font-semibold text-black">
                Average Rating
              </div>
              <div className="flex gap-3.5 mt-3.5 whitespace-nowrap">
                {/* TODO: replace number with correct value */}
                <div className="grow text-6xl text-blue-500 max-md:text-4xl">
                  4.3
                </div>
                <div className="flex flex-1 gap-1.5 self-end mt-8 text-base text-green-600">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/80d2f014ca2edd76d94714a3c3dd7fcbc0b60351c58129f7e943dc9698c098dc?"
                    className="shrink-0 self-start aspect-square fill-green-600 w-[9px]"
                  />
                  {/* TODO: replace number with correct value */}
                  <div>0.47%</div>
                </div>
              </div>
              <div className="flex flex-col self-stretch pb-2.5 mt-12 rounded-lg bg-zinc-400 max-md:mt-10">
                <div className="z-10 shrink-0 h-4 bg-white" />
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
      <div className="z-10 justify-center items-start px-5 py-6 w-full text-2xl font-semibold text-black whitespace-nowrap bg-blue-50 max-md:pr-5 max-md:max-w-full">
        Analytics
      </div>
      <div className="justify-center items-center px-16 py-2 w-full text-lg font-semibold text-white bg-blue-900 rounded-xl max-md:px-5 max-md:max-w-full">
        NET PROMOTER SCORE
      </div>
      {/* TODO: Fix Net Promoter score view */}
      <div className="w-full bg-white min-h-[30px] max-md:max-w-full" />
      <div className="self-center px-5 mt-2 w-full max-w-[954px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-black max-md:mt-10">
              <div className="text-2xl font-medium">Net Promoter Score</div>
              <div className="mt-3.5 text-lg">% Promoters - % Detractors</div>
              <div className="self-center mt-5 text-6xl max-md:text-4xl">
                +91
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-0 items-start self-stretch my-auto text-black whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca12dd765bdb37610e8f4dc6a195176b70f811f5b0903ed2d933d2a01b33046c?"
                className="shrink-0 mt-1.5 aspect-square w-[50px]"
              />
              {/* TODO: Fix value */}
              <div className="flex flex-col">
                <div className="text-lg">Promoters</div>
                <div className="mt-3.5 text-4xl">84%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-0 self-stretch my-auto text-black whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f1f0d28e3b3babfd809be6aab75265b53d97bb309e53a466cee422ed726b72a?"
                className="shrink-0 self-start aspect-square w-[50px]"
              />
              <div className="flex flex-col">
                {/* TODO: fix value */}
                <div className="text-lg">Detractors</div>
                <div className="self-center mt-3.5 text-4xl">8%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-0 self-stretch my-auto text-black whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbc33a071aa6a7e9174877c6fe5f0f4ec8a8b110788769b7d786939256494b4f?"
                className="shrink-0 self-start aspect-square w-[50px]"
              />
              <div className="flex flex-col">
                {/* TODO: Fix value */}
                <div className="text-lg">Passive</div>
                <div className="mt-3.5 text-4xl">4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* DATA ANALYTICS */}
      <div className="flex flex-col">
      <div className="justify-center items-center px-16 py-2.5 w-full text-lg font-semibold text-white bg-blue-900 max-md:px-5 max-md:max-w-full">
        FEEDBACK TRENDS
      </div>
      <div className="self-center mt-4 w-full max-w-[1020px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {/* TODO: d3.js Graphs GO HERE */}
              <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                  <div className="flex gap-0 max-md:flex-wrap">
                    <div className="flex z-10 flex-col">
                      <div className="justify-center px-2 py-1.5 text-sm text-blue-500 whitespace-nowrap bg-white border border-solid border-neutral-400">
                        Positive/Negative
                      </div>
                      <div className="flex gap-0.5 px-5 mt-4 text-xs font-semibold text-black">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aecc52fecfbe34ff99199997d1eba49ed630424d888098563b502e8ffc1698b8?"
                          className="shrink-0 w-5 aspect-square"
                        />
                        <div className="my-auto">Total Feedback</div>
                      </div>
                    </div>
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                      <div className="flex gap-0 text-sm text-white max-md:pr-5">
                        <div className="justify-center px-2.5 py-2 whitespace-nowrap bg-blue-500 border border-solid border-neutral-400">
                          Category
                        </div>
                        <div className="flex gap-2.5 py-px whitespace-nowrap bg-blue-500 border border-solid border-neutral-400">
                          <div className="shrink-0 w-px bg-white border border-white border-solid h-[25px]" />
                          <div className="my-auto">Date</div>
                        </div>
                        <div className="flex gap-2 py-px bg-blue-500 border border-solid border-neutral-400">
                          <div className="shrink-0 w-px bg-white border border-white border-solid h-[25px]" />
                          <div className="flex-auto">Customer Type</div>
                        </div>
                      </div>
                      <div className="flex gap-5 items-start mt-3.5 text-xs font-semibold text-black">
                        <div className="flex flex-1 gap-0.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/30c953d26efe96b802276b5346c7266f0cc4c4e22a5c482a87af22b120ae517a?"
                            className="shrink-0 w-5 aspect-square"
                          />
                          <div className="my-auto">Positive Feedback</div>
                        </div>
                        <div className="flex flex-1 gap-0.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/209a4494f646c060dbd284b7da7adfbe91adef833ddffc0915b2a5435ebd30d1?"
                            className="shrink-0 w-5 aspect-square"
                          />
                          <div className="my-auto">Negative Feedback</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden px-10 pb-2.5 mt-9 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-5 max-md:mt-10">
                          <div className="shrink-0 w-0.5 border-2 border-solid bg-zinc-300 border-zinc-300 h-[295px]" />
                          <div className="flex flex-col grow shrink-0 self-end mt-40 basis-0 w-fit max-md:mt-10">
                            <div className="flex flex-col self-end w-[71px]">
                              <div className="shrink-0 rounded-full border-2 border-green-600 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                              <div className="flex gap-5 justify-between items-start mt-5">
                                <div className="shrink-0 mt-1.5 rounded-full border-2 border-red-500 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                                <div className="shrink-0 rounded-full border-2 border-green-600 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                              </div>
                            </div>
                            <div className="shrink-0 mt-2.5 rounded-full border-2 border-red-500 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                            <div className="flex gap-5 justify-between items-start self-center mt-6 w-[71px]">
                              <div className="shrink-0 rounded-full border-2 border-red-500 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                              <div className="shrink-0 mt-1 rounded-full border-2 border-green-600 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                            </div>
                            <div className="flex gap-5 justify-between items-start mt-6">
                              <div className="shrink-0 rounded-full border-2 border-green-600 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                              <div className="shrink-0 mt-2 rounded-full border-2 border-red-500 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-5 justify-between mt-8 max-md:mt-10">
                          <div className="shrink-0 my-auto rounded-full border-2 border-green-600 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                          <div className="flex flex-col">
                            <div className="text-2xl text-yellow-600">
                              120
                              <span className="text-sm text-yellow-600">High</span>
                            </div>
                            <div className="flex gap-5 max-md:pr-5">
                              <div className="flex flex-col flex-1 pt-2.5 pb-14 bg-orange-100">
                                <div className="shrink-0 rounded-full border-2 border-green-600 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px]" />
                                <div className="shrink-0 mt-40 rounded-full border-2 border-red-500 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] max-md:mt-10" />
                              </div>
                              <div className="flex flex-col flex-1 my-auto">
                                <div className="shrink-0 rounded-full border-2 border-green-600 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px]" />
                                <div className="shrink-0 mt-24 rounded-full border-2 border-red-500 border-solid bg-white bg-opacity-0 h-[9px] stroke-[2px] w-[9px] max-md:mt-10" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 self-center px-5 mt-1 text-xs font-medium text-black whitespace-nowrap max-md:flex-wrap">
                    <div className="grow">Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                    <div>Mon</div>
                  </div>
                </div>
              </div>
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

