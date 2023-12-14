        function obliczenia() {
            var format = document.getElementById("wybierzFormat").value;

            if (format !== "") {
                var varX;

                switch (format) {
                    case "A6":
                        varX = 8;
                        break;
                    case "A5":
                    case "A4":
                        varX = 10;
                        break;
                    case "A3":
                        varX = 12;
                        break;
                    case "A2":
                        varX = 16;
                        break;
                    case "A1":
                        varX = 24;
                        break;
                    case "A0":
                        varX = 32;
                        break;
                    default:
                        varX = 0;
                }

                document.getElementById("b1").innerText = formatujWynik(varX * 1);
                document.getElementById("b2").innerText = formatujWynik(varX * 1.5);
                document.getElementById("h1").innerText = formatujWynik(varX * 2);
                document.getElementById("h2").innerText = formatujWynik(varX * 3);
                document.getElementById("h3").innerText = formatujWynik(varX * 4);
                document.getElementById("d1").innerText = formatujWynik(varX * 8);
                document.getElementById("d2").innerText = formatujWynik(varX * 16);

                document.getElementById("inB1").innerText = formatujWynik((varX * 1) * 1.225);
                document.getElementById("inB2").innerText = formatujWynik((varX * 1.5) * 1.225);
                document.getElementById("inH1").innerText = formatujWynik((varX * 2) * 1.05);
                document.getElementById("inH2").innerText = formatujWynik((varX * 3) * 1.05);
                document.getElementById("inH3").innerText = formatujWynik((varX * 4) * 1.05);
                document.getElementById("inD1").innerText = formatujWynik((varX * 8) * 1);
                document.getElementById("inD2").innerText = formatujWynik((varX * 16) * 1);

                document.getElementById("wysX").innerText = formatujWynik(varX * 0.247);

                document.getElementById("margin").innerText = Math.round(document.getElementById("wysX").innerText * 4);

                document.getElementById("gut").innerText = Math.round(document.getElementById("wysX").innerText * 2);

                var gutAltValue = document.getElementById("gut").innerText * 0.5;
                document.getElementById("gutAlt").innerText = gutAltValue % 1 !== 0 ? gutAltValue.toFixed(1) : gutAltValue.toFixed(0);


                if (format === "A6") {
                    document.getElementById("col").innerText = "4";
                    document.getElementById("row").innerText = "6";
                } else if (format === "A5") {
                    document.getElementById("col").innerText = "6";
                    document.getElementById("row").innerText = "8";
                } else {
                    document.getElementById("col").innerText = "12";
                    document.getElementById("row").innerText = "16";
                }
                if (format === "A6") {
                    document.getElementById("colHor").innerText = "6";
                    document.getElementById("rowHor").innerText = "4";
                } else if (format === "A5") {
                    document.getElementById("colHor").innerText = "8";
                    document.getElementById("rowHor").innerText = "6";
                } else {
                    document.getElementById("colHor").innerText = "12";
                    document.getElementById("rowHor").innerText = "8";
                }
            } else {

                document.getElementById("b1").innerText = "";
                document.getElementById("b2").innerText = "";
                document.getElementById("h1").innerText = "";
                document.getElementById("h2").innerText = "";
                document.getElementById("h3").innerText = "";
                document.getElementById("d1").innerText = "";
                document.getElementById("d2").innerText = "";
                document.getElementById("inB1").innerText = "";
                document.getElementById("inB2").innerText = "";
                document.getElementById("inH1").innerText = "";
                document.getElementById("inH2").innerText = "";
                document.getElementById("inH3").innerText = "";
                document.getElementById("inD1").innerText = "";
                document.getElementById("inD2").innerText = "";
                document.getElementById("wysX").innerText = "";
                document.getElementById("margin").innerText = "";
                document.getElementById("gut").innerText = "";
                document.getElementById("gutAlt").innerText = "";
                document.getElementById("col").innerText = "";
                document.getElementById("row").innerText = "";
                document.getElementById("colHor").innerText = "";
                document.getElementById("rowHor").innerText = "";
            }
        }

        function formatujWynik(wynik) {
            var s = wynik % 1 !== 0 ? wynik.toFixed(2).replace(/\.?0*$/, '') : wynik.toFixed(0);
            return s;
        }