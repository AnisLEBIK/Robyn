(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(109)),i={id:"doc3",title:"Quick Start"},l={unversionedId:"doc3",id:"doc3",isDocsHomePage:!1,title:"Quick Start",description:"Once you have loaded all scripts, we will focus on the \u2018.exec.R\u2019 one to quickly start testing the code and understanding how to use it. Below you will find the steps to follow:",source:"@site/docs/doc3.md",slug:"/doc3",permalink:"/Robyn/docs/doc3",editUrl:"https://github.com/facebookexperimental/Robyn/docs/doc3.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/Robyn/docs/"},next:{title:"Step-by-step guide",permalink:"/Robyn/docs/doc12"}},s=[{value:"Load packages",id:"load-packages",children:[]},{value:"Load data",id:"load-data",children:[]},{value:"Set global parameters",id:"set-global-parameters",children:[]},{value:"Set cores for parallel computing",id:"set-cores-for-parallel-computing",children:[]},{value:"Set model core features",id:"set-model-core-features",children:[]},{value:"Set hyperparameters bounds",id:"set-hyperparameters-bounds",children:[]},{value:"Set model train and test size",id:"set-model-train-and-test-size",children:[]},{value:"Define experimental results and calibration",id:"define-experimental-results-and-calibration",children:[]},{value:"Loading scripts and running the model",id:"loading-scripts-and-running-the-model",children:[]},{value:"Plotting results",id:"plotting-results",children:[]}],c={toc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Once you have loaded all scripts, we will focus on the \u2018.exec.R\u2019 one to quickly start testing the code and understanding how to use it. Below you will find the steps to follow:"),"  "),Object(o.b)("h2",{id:"load-packages"},"Load packages"),Object(o.b)("p",null,"You will utilize several open source packages to run this code, please install and load all libraries before running it. You will find several packages related to working with data tables, loops, parallel computing and plotting results, however the package for the core regression process is library(glmnet) from which the ridge regression will execute. "),Object(o.b)("h4",{id:"please-make-sure-to-install-all-libraries-before-running-the-scripts"},"Please make sure to install all libraries before running the scripts"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"library(glmnet)\n...\n...\n")),Object(o.b)("h2",{id:"load-data"},"Load data"),Object(o.b)("p",null,"First you will load the data and create the outcome variable. As in any MMM, this is a dataframe with a minimum set of columns ds and y, containing the date and numeric value respectively. You may also want to add regressors variables to account for different marketing channels and their investment, impressions or any other metric to determine the size and impact of marketing campaigns.\nPlease have in mind that this automated file reading solution requires that you are using RStudio and that it will set your working directory as the source file location in Rstudio."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"#### load data\nscript_path <- str_sub(rstudioapi::getActiveDocumentContext()$path, start = 1, end = max(unlist(str_locate_all(rstudioapi::getActiveDocumentContext()$path, \"/\"))))\ndt_input <- fread(paste0(script_path,'de_simulated_data.csv'))\nholidays <- fread(paste0(script_path,'generated_holidays.csv')\n")),Object(o.b)("h2",{id:"set-global-parameters"},"Set global parameters"),Object(o.b)("p",null,"The next step is to define the variables you will be working with from the previously uploaded data. There are different types of variables, as mentioned above, the main three ones are dependent (set_depVarName), date (set_dateVarName) and media volume (set_mediaVarName). "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#### define variables\nset_dateVarName <- c("DATE") # date must be format "2020-01-01"\nset_depVarName <- c("revenue") # there should be only one dependent variable\nset_mediaVarName <- c("tv_S", "facebook_I" ) # c("revenue", "tv_S", "ooh_S", "print_S", "facebook_I"    , "search_clicks_P", "search_imps_P", "search_S", "competitor_sales_B") we recommend to use media pressure metrics like impressions, GRP etc for the model. If not applicable, use spend instead\n')),Object(o.b)("p",null,"Moreover, You will have to define which base variables (set_baseVarName) provided by the code or that you own to use, we recommend at least to keep the trend and holidays in the model."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'set_baseVarName <- c("TREND","HOLIDAYS","SEASONAL", "competitor_sales_B") \n##### "TREND", "HOLIDAYS","SEASONAL", "WEEKDAY", "HOURLY" are provided by the code. \n')),Object(o.b)("p",null,"Finally, you will find two variables for sign control, these will control for constrained variables that theoretically have to be greater than zero (positive), lower than zero (negative), or can take just any coefficient values (default).You will see there are media and base variables sign control so you will have to define them on separate variables:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'set_mediaVarSign <- c("positive", "positive") # c("default", "positive", and "negative"), control the signs of coefficients for media variables\nset_baseVarSign <- c("default", "default", "default", "negative") # c("default", "positive", and "negative"), control the signs of coefficients for base variables\n')),Object(o.b)("h2",{id:"set-cores-for-parallel-computing"},"Set cores for parallel computing"),Object(o.b)("p",null,"Next we will define the amount of cores to allocate to the overall process. Please bear in mind to always leave one or two cores out of the total number of cores your machine has to prevent your OS from crashing."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"#### set cores for parallel computing\nregisterDoSEQ(); detectCores()\nsetCores <- 6\n")),Object(o.b)("h2",{id:"set-model-core-features"},"Set model core features"),Object(o.b)("p",null,"The following step is crucial, this is where you will define if you will be using weibull or geometric adstock functions (Please refer to the variables transformation section within this documentation). You will also need to define the number of iterations for the algorithm to loop and find optimal hyperparameter values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#### set model core features\nadstock <- "geometric" # geometric or weibull\niterN <- 1000 # "rs" iteration is theoretically unlimited.\n')),Object(o.b)("h2",{id:"set-hyperparameters-bounds"},"Set hyperparameters bounds"),Object(o.b)("p",null,"This is an optional step as there is absolutely no need to change it. You may edit bounds in case you already found optimal ranges for parameters after several iterations. We recommend you leave it as it is at the beginning."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"#### set hyperparameters\nno need to change\nhypBound <- list(thetas = c(0, 0.9999) ,shapes = c(0, 5) ,scales = c(0.0001, 0.9999), \n                 alphas = c(0, 5) ,gammas = c(0.0001, 0.9999) ,lambdas = c(0, 1))\n")),Object(o.b)("h2",{id:"set-model-train-and-test-size"},"Set model train and test size"),Object(o.b)("p",null,"On this step you will define the percentage of your data you will be saving to test the model once it has been trained and validated. We recommend assigning 80% for training purposes."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"set_mod_train_size <- 0.8 # 0.8 means taking 80% of data to train and 20% to test the model\n")),Object(o.b)("h2",{id:"define-experimental-results-and-calibration"},"Define experimental results and calibration"),Object(o.b)("p",null,"The last step in variable definition is to add incremental studies data in case you have information available, such as conversion lift data for Facebook. You will need to first define calibrateLift <- T to include calibration in your model. Consequently, you will need to define which channels you want to define certain incremental values for as well as, start, end and incremental absolute values (liftAbs) from the studies. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'calibrateLift <- F\nset_lift <- data.table(channel = c("facebook_I",  "tv_S", "facebook_I"),\n                       liftStartDate = as.Date(c("2018-05-01", "2017-11-27", "2018-07-01")),\n                       liftEndDate = as.Date(c("2018-06-10", "2017-12-03", "2018-07-20")),\n                       liftAbs = c(70000000, 5000000, 50000000))\n')),Object(o.b)("h2",{id:"loading-scripts-and-running-the-model"},"Loading scripts and running the model"),Object(o.b)("p",null,"Once you have defined all the variables from previous steps, you will need to finally execute the \u2018.func.R\u2019 and \u2019.plot.R\u2019 scripts in order to run the model. Therefore you will need to load the scripts first, run the models and print results as per below: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#### load scripts\nsource(paste(script_path, "fb_nextgen_mmm_v19.func.R", sep=""))\nsource(paste(script_path, "fb_nextgen_mmm_v19.bayes.R", sep=""))\nsource(paste(script_path, "fb_nextgen_mmm_v19.plot.R", sep=""))\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#### Run model scripts\nif (hyperparamOptim == "rs") {\n  sysTimeRS <- system.time({\n    resultRS <- f.mmm(hyperparameters,\n                      iterRS = iterN,\n                      hyperparamOptim = "rs",\n                      setCores = setCores\n    )})\n  \n  #print(head(resultRS$resultCollect$resultHypParam, 15))\n  bestParRS <- f.getBestParRS(resultRS, calibrateLift)\n  best.resultRS <- f.mmm(bestParRS, hyperparamOptim = "rs")\n  \n} }\nregisterDoSEQ(); getDoParWorkers()\n')),Object(o.b)("h2",{id:"plotting-results"},"Plotting results"),Object(o.b)("p",null,"Once all iterations are finished you will proceed to plot different charts that will help you assess the models accuracy, business contribution for marketing channels and baseline variables."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"#### insert TRUE into plot functions to plot\nf.plotHyperSamp(F) # plot latin hypercube hyperparameter sampling balance\nf.plotTrendSeason(F) # plot prophet trend, season and holiday decomposition\nf.plotBestMod(T) # plot best model with 5 plots: media adstocking, sales decomp, actual vs fitted over time, sales decomp area plot & channel response curve\nf.plotMAPE.RS(F) # plot RS MAPE convergence, only for random search\nf.plotBestModResid(F) # plot best model diagnostics: residual vs fitted, QQ plot and residual vs. actual\nf.plotHypConverge(F) # plot hyperparameter vs MAPE convergence\n")))}d.isMDXComponent=!0}}]);