const part2Data = [{
    "qType": "choice",
    "text": "Imagine you borrow 500 AED from a friend. You intend to pay it back in four months, and your friend applies a 2% simple interest rate per month for this transaction. How much would you need to pay him in the end?",
    "options": [
      "500.0 AED",
      "540.0 AED",
      "541.2 AED",
      "580.0 AED"
    ],
    "correctAnswer": 1,
    [cite_start]"explanation": "Using the simple interest formula F = P * (1 + N * i), where P = 500, N = 4, and i = 0.02[cite: 131]. [cite_start]The calculation is 500 * (1 + 4 * 0.02) = 540 AED[cite: 131].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "a) F = P * (1 + N * i) = 500 * (1 + 4 * 0.02) = 540 AED [cite: 131]"
  },
  {
    "qType": "choice",
    "text": "If you receive 2,000 AED today and deposit it in a savings account with a 2% compound interest rate, how much will you have in the account after two full years?",
    "options": [
      "2,040.0 AED",
      "2,080.0 AED",
      "2,080.8 AED",
      "2,100.4 AED"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "Using the compound interest formula F = P * (1 + i)^N[cite: 123]. [cite_start]Substituting the values: F = 2,000 * (1.02)^2 = 2,080.8 AED[cite: 123].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "F = P * (1 + i)^N = 2,000 * (1.02)^2 = 2,080.8 AED [cite: 123]"
  },
  {
    "qType": "choice",
    "text": "A business opportunity requires an investment today of 2,500 AED and promises you 3,146 AED in four years. What is the approximate annual rate of increase (interest rate)?",
    "options": [
      "4%",
      "5%",
      "6%",
      "7%"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "Using the formula F = P * (1 + i)^N, we have 3,146 = 2,500 * (1 + i)^4[cite: 126]. [cite_start]Solving for i gives (1 + i) = (3146/2500)^(1/4), which results in i being approximately 6%[cite: 126].",
    "source": "merge4.pdf",
    "originalKpContent": "3,146 = 2,500 * (1 + i)^4; (1 + i) [cite_start]= 1258^(1/4) -> i approx 6% [cite: 126]"
  },
  {
    "qType": "choice",
    "text": "You borrow money from a bank at a 4% interest rate. If you choose a payment plan where you pay 12,000 AED annually for four years, what is the present worth of this payment plan?",
    "options": [
      "42,740.00 AED",
      "43,558.74 AED",
      "48,000.00 AED",
      "50,000.00 AED"
    ],
    "correctAnswer": 1,
    [cite_start]"explanation": "This requires the Present Worth Factor formula: P = A * [((1+i)^N - 1) / (i * (1+i)^N)][cite: 145]. [cite_start]For A = 12,000, N = 4, and i = 4%, the factor is 3.6299[cite: 144]. [cite_start]Thus, P = 12,000 * 3.6299 = 43,558.74 AED[cite: 145].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "P = A * [((1+i)^N - 1) / (i * (1+i)^N)] = 12,000 * 3.6299 = 43,558.74 AED [cite: 145]"
  },
  {
    "qType": "choice",
    "text": "Given a bank interest rate of 4%, what is the present value of paying a single lump sum of 50,000 AED after exactly 4 years?",
    "options": [
      "42,740 AED",
      "43,558 AED",
      "48,076 AED",
      "50,000 AED"
    ],
    "correctAnswer": 0,
    [cite_start]"explanation": "This requires the discounting factor formula: P = F / (1 + i)^N[cite: 147]. [cite_start]Substituting the values gives P = 50,000 / (1.04)^4 = 42,740 AED[cite: 147].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "P = F / (1 + i)^N = 50,000 / (1.04)^4 = 42,740 AED [cite: 147]"
  },
  {
    "qType": "choice",
    "text": "Consider an uneven cash flow series over four years: 26 kAED in year 1, 15 kAED in year 2, 22 kAED in year 3, and 12 kAED in year 4. Assuming an 8% interest rate, what is the total present value?",
    "options": [
      "63.22 kAED",
      "65.50 kAED",
      "75.00 kAED",
      "81.42 kAED"
    ],
    "correctAnswer": 0,
    [cite_start]"explanation": "The present value is the sum of the discounted future cash flows: P = 26/(1.08)^1 + 15/(1.08)^2 + 22/(1.08)^3 + 12/(1.08)^4[cite: 163]. [cite_start]This equals 63.22 kAED[cite: 163].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "P = Sum(F_N / (1+i)^N) = 26/(1.08)^1 + 15/(1.08)^2 + 22/(1.08)^3 + 12/(1.08)^4 = 63.22 kAED [cite: 163]"
  },
  {
    "qType": "choice",
    "text": "If a business opportunity has a total present value of 63.22 kAED, what is the equal annual payment amount (annual equivalence) over four years at an 8% interest rate?",
    "options": [
      "15.80 kAED/year",
      "17.44 kAED/year",
      "19.08 kAED/year",
      "21.15 kAED/year"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "This requires converting a present value to an annual equivalent using the Capital Recovery Factor: A = P * [(i * (1+i)^N) / ((1+i)^N - 1)][cite: 165]. [cite_start]Here, A = 63.22 * 0.3019 = 19.08 kAED/year[cite: 165].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "A = P * [(i * (1+i)^N) / ((1+i)^N - 1)] = 63.22 * 0.3019 = 19.08 kAED/year [cite: 165]"
  },
  {
    "qType": "choice",
    "text": "You have 100 kAED available. Option 1 is to take 30 kAED and invest it in a project with a 10% IRR for 5 years, leaving the remaining 70 kAED in a 3% interest pool. What is the total accumulated value after 5 years?",
    "options": [
      "100 kAED",
      "120 kAED",
      "129 kAED",
      "134 kAED"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "The 30 kAED project yields F = 30 * (1 + 0.1)^5 = 48 kAED[cite: 222]. [cite_start]The 70 kAED pool yields F = 70 * (1 + 0.03)^5 = 81 kAED[cite: 222]. [cite_start]Total = 48 + 81 = 129 kAED[cite: 223].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "TOTAL Option 1: 129 kAED in 5 years (average of 5.3% interest) [cite: 223]"
  },
  {
    "qType": "choice",
    "text": "You have 100 kAED available. Option 2 is to invest the entire 100 kAED in a project with a 6% IRR for 5 years. What is the total accumulated value after 5 years?",
    "options": [
      "125 kAED",
      "129 kAED",
      "134 kAED",
      "140 kAED"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "Investing the full amount at 6% yields F = 100 * (1 + 0.06)^5 = 134 kAED[cite: 225]. [cite_start]The remaining pool balance is 0 kAED[cite: 225]. [cite_start]The total is 134 kAED[cite: 226].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "100kAED will add 6% interest (project) in 5 years: F_5 = 100 * (1+0.06)^5 = 134 kAED [cite: 225]"
  },
  {
    "qType": "choice",
    "text": "Project P1 has a Net Present Worth (NPW) of 47.1 $ over a lifetime of 8 years. At a Minimum Acceptable Rate of Return (MARR) of 8%, what is its Annual Equivalence (AE)? (Note: the Capital Recovery Factor for 8% and 8 years is 0.174)",
    "options": [
      "5.88 $/y",
      "8.20 $/y",
      "9.23 $/y",
      "10.45 $/y"
    ],
    "correctAnswer": 1,
    [cite_start]"explanation": "The Annual Equivalence is found by multiplying the NPW by the Capital Recovery Factor[cite: 261]. [cite_start]Therefore, AE = 47.1 * 0.174 = 8.20 $/y[cite: 265].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "AE_P1 = 47.1 * 0.174 = 8.20 $/y [cite: 265]"
  },
  {
    "qType": "choice",
    "text": "An investment has an initial cost of 120 MUS$ and a lifetime of 8 years. Considering an interest rate of 6% (where the Capital Recovery Factor is 0.161), what is the Annual Equivalence of the Investment cost?",
    "options": [
      "15.0 M$/y",
      "18.5 M$/y",
      "19.3 M$/y",
      "22.9 M$/y"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "The Annual Equivalence of the investment is calculated using the recovery capital factor on the initial investment[cite: 275]. [cite_start]AEC_Inv = 120 * 0.161 = 19.3 M$/y[cite: 276].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "AEC_Inv = 120 * 0.161 = 19.3 M$/y [cite: 276]"
  },
  {
    "qType": "choice",
    "text": "A project has a salvage value of 18 MUS$ at the end of its 8-year lifetime. Using a 6% interest rate (where the Sinking Fund Factor is 0.101), what is the Annual Equivalence of the Salvage Value?",
    "options": [
      "-1.8 M$/y",
      "-2.4 M$/y",
      "1.8 M$/y",
      "2.4 M$/y"
    ],
    "correctAnswer": 0,
    [cite_start]"explanation": "Salvage is considered a revenue at the end of the project, so it represents a negative cost[cite: 280]. [cite_start]Using the sinking fund factor, AEC_salv = -18 * 0.101 = -1.8 M$/y[cite: 281].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "AEC_salv = -18 * 0.101 = -1.8 M$/y [cite: 281]"
  },
  {
    "qType": "choice",
    "text": "A synthetic zeolite production project has an annualized investment cost of 19.3 M$/y, fixed O&M of 2.4 M$/y, variable O&M of 3.0 M$/y, and an annualized salvage value of -1.8 M$/y. What is the total annual equivalent cost (AEC)?",
    "options": [
      "21.1 M$/y",
      "22.9 M$/y",
      "24.7 M$/y",
      "26.5 M$/y"
    ],
    "correctAnswer": 1,
    [cite_start]"explanation": "The total annual cost is the sum of all annualized costs and revenues[cite: 282]. [cite_start]AEC = 19.3 + 2.4 + 3.0 - 1.8 = 22.9 M$/y[cite: 282].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "Total annual cost: AEC = AEC_Inv + AEC_FOM + AEC_VOM + AEC_Salv = 22.9 M$/y [cite: 282]"
  },
  {
    "qType": "choice",
    "text": "If a plant produces 1.5 million kg/y of synthetic zeolites and its total annual equivalent cost is 22.9 M$/y, what is the calculated unit cost of production?",
    "options": [
      "12.5 $/kg",
      "14.2 $/kg",
      "15.3 $/kg",
      "17.0 $/kg"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "The unit cost is simply the total annual equivalent cost divided by the annual production volume[cite: 283]. [cite_start]UC = 22.9 M$/y / 1.5 Mkg/y = 15.3 $/kg[cite: 283].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "Unit cost: UC = AEC / Prod = 22.9 M$/y / 1.5 Mkg/y = 15.3 $/kg [cite: 283]"
  },
  {
    "qType": "choice",
    "text": "A project generates total annual benefits of 37.5 M$/y (from selling 1.5 million kg/y at 25 $/kg) and has a total annual equivalent cost of 22.9 M$/y. What is its Benefit-Cost Ratio (BCR)?",
    "options": [
      "1.000",
      "1.500",
      "1.637",
      "1.834"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "The Benefit-Cost Ratio (BCR) is calculated as Total Benefits divided by Total Costs[cite: 289]. [cite_start]BCR = B / C = 37.5 M$/y / 22.9 M$/y = 1.637[cite: 289].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "BCR = B / C = (1.5 * 25 M$/y) / 22.9 M$/y = 25 $/kg / 15.3 $/kg = 1.637 [cite: 289]"
  },
  {
    "qType": "choice",
    "text": "Calculate the Profitability Index Ratio (PIR) for a project with Annual Benefits (B) of 37.5 M$/y, Annual O&M costs (C') of 5.4 M$/y, an Initial Investment AE of 19.3 M$/y, and a Salvage AE of -1.8 M$/y.",
    "options": [
      "1.637",
      "1.750",
      "1.834",
      "2.000"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "The formula for PIR is (B - C') / I[cite: 290]. In this scenario, I (Investment) is the net investment cost: 19.3 - 1.8 = 17.5. [cite_start]PIR = (37.5 - 5.4) / 17.5 = 1.834[cite: 290].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "PIR = (B - C') / I = ((1.5 * 25) - (2.4 + 3.0)) / (19.3 - 1.8) = 1.834 [cite: 290]"
  },
  {
    "qType": "choice",
    "text": "According to the provided electricity generation formula, what is the annual energy generation (E_Gen) of a 100 MW power plant (P_IC) operating with an average 90% capacity factor (FC)?",
    "options": [
      "788,400 MWh/year",
      "876,000 MWh/year",
      "900,000 MWh/year",
      "7,884,000 MWh/year"
    ],
    "correctAnswer": 0,
    [cite_start]"explanation": "To find electricity generation, use the formula E_Gen = P_IC * FC * 8760, where 8760 is the amount of hours per year[cite: 72, 73]. [cite_start]E_Gen = 100 * 0.90 * 8760 = 788,400 MWh/year[cite: 72].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "E_Gen = P_IC * FC * 8760 [cite: 72]"
  },
  {
    "qType": "choice",
    "text": "An Ultra-supercritical Coal (UCS) power plant without carbon capture has a Lifecycle GHG Emission Factor of 0.863 tCO2/MWh. If it generates 1,000 MWh and the social cost of carbon is $250/tCO2, what is the total economic impact (carbon cost) of these emissions?",
    "options": [
      "$86,300",
      "$117,750",
      "$215,750",
      "$250,000"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "First, calculate total emissions: 1,000 MWh * 0.863 tCO2/MWh = 863 tCO2[cite: 66]. [cite_start]Next, multiply by the social carbon cost: 863 tCO2 * $250/tCO2 = $215,750[cite: 46].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "a carbon cost in the economy (social cost of carbon) of $250 for every ton of CO2 emitted [cite: 46] [cite_start]... Lifecycle GHG Emission Factor ... 0.863 tCO2/MWh [cite: 66]"
  },
  {
    "qType": "choice",
    "text": "In the ISYE 200 Engineering Economic Analysis course grading breakdown, what percentage of the final grade is the Project(s) worth?",
    "options": [
      "15%",
      "20%",
      "25%",
      "35%"
    ],
    "correctAnswer": 2,
    [cite_start]"explanation": "According to the course syllabus assessment tables, both Project(s) and Coursework 2 (Group Project) account for exactly 25% of the total student grade[cite: 102, 306].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "Project(s) 25% [cite: 102]"
  },
  {
    "qType": "choice",
    "text": "When evaluating the Net Present Worth (NPW) of a cash flow to find the Internal Rate of Return (IRR), what specific condition indicates that a trial interest rate is indeed the correct IRR?",
    "options": [
      "NPW is maximized",
      "NPW exactly equals 0",
      "NPW equals the initial investment",
      "NPW becomes strictly negative"
    ],
    "correctAnswer": 1,
    [cite_start]"explanation": "The IRR can be determined by calculating the Net Present Worth (NPW) and setting it equal to 0[cite: 208]. [cite_start]The trial rate at which PW = 0 is considered the Internal Rate of Return[cite: 209].",
    "source": "merge4.pdf",
    [cite_start]"originalKpContent": "We can determine the IRR by calculating the NPW and making it equal to 0. [cite: 208]"
  }
  ]