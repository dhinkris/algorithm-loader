const pipeline=
    {
        "pipeline": {
            "connections": {
                "connection": [
                    {
                        "_source": "BETnii.gz_1.OutputFile",
                        "_sink": "smartline_BETnii.gz_FLIRTnii.gz_1.smartlineinput"
                    },
                    {
                        "_source": "smartline_BETnii.gz_FLIRTnii.gz_1.smartlineoutput",
                        "_sink": "FLIRTnii.gz_1.Input"
                    },
                    {
                        "_source": "smartline_FLIRTnii.gz_BETnii.gz_1.smartlineoutput",
                        "_sink": "BETnii.gz_2.InputFile"
                    },
                    {
                        "_source": "FLIRTnii.gz_1.Output",
                        "_sink": "smartline_FLIRTnii.gz_BETnii.gz_1.smartlineinput"
                    }
                ]
            },
            "icons": {
                "icon": {
                    "_id": "0",
                    "_value": "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAVK0lEQVR42u1ZaXBTV5YW2JD0dE8l\nk9RMpbvT3dmJDSQdAgkESFhDIBAImLAZjPd9k2VJtqSnfbMW25J3jCzbIH3viX3fl5AAnZCFhJC1\nO5VJ9aQm87N/zfyZ+e41kKV70jU1f7pmItep+9699+md7yzfOVfW6X78/Pj58fPj5//ZZ/zfiPxf\nAXLHHXdIdZ588smslpaWcc3NzeNycnKynnjiiSyTyTTufwJk3LisH7yfOPH276x9f33ChNt0WVkT\nflDh7z/HZ+66/fa/0+lcLldvU1PTYCQSGfJ6vYlgMLjd4/EMhcPhoVgstj0QCCTa2toSXJcirrlH\nirj2eHwJu92ZUBRHwuFwJZxO93fuo9GOhNfrl+L3B+VaS4tFitFoTnR2xhM+X0BeNzY2yecikXZ+\nfyhhsdjkfpfLI98jRFyLd9yc4/OdPT19Zh09MFJQUJCuqanRtmzZolZWVkJc19fXaxUVFeC6Rk9p\niqJodrtds1qt8l5Ia2urRgW0+romraa6QWuoN2hNepOmbzRKMTSZNbPJqjU2NMs9Yk6s37yvq9Vr\ntTWNWnVVvXy2xWzTTEaLvC8vq5ZrYl7MWS0OKeLa2NyqtbZQH8WtOR3ekbZg1Kej9YepfIreUNvb\n29Hb25sW1/SE2tPTk45Go+nOzs50d3d3emBgIL19+/b04OBgur+/Py3W+/u2p+Ox3nRHe1e6PRpP\nR8Kd6WAgIiUc6pBz0UgszZfJsa93UIp4RsjoSDo90J9Ixzp75F7xzM1nxbqY64r3yfeIfTfHocRo\nesco0orNtYN7Pbrq6uqR4uLitM1mE14Aw0x6QdxbLBY4nU44HA4QMBhaoPIgCHR1dcl7Kg4qCb8v\nBLfLD1oKtDxoddByoNXgcQfkfLOhBTarU46lJZUoKa4APYnOjm6kdmro6R4ALSxFfJ/XEwS9IEU8\n57B75Jx4H40CGk9873Cord2mo+LJsrKynUJpAkkzZFLimmGDurq6FBNeFcI51efzqfSOSu/IMRyO\nqi6nT+WL5UiFVb5M5YuliPmAP6xSQZUvk3vEPUNI3VpQom7ZXKTOmT1PXbN6ndyf2D4ixedtUxmS\nKpVUGUoqw1FliKk0kJyncVQaTSUoOc9rt47KD+Xl5e2k0jAajSkm/069Xp8W942NjSnhJYPBAOaG\n9AqTHCQCMOQoHdJCDrtXSsAfoaXiUtqC7QgGovI6ndqFnTs0DCdT2LP7oBzFXrEuZG3eRsya+Szy\nNxWiu2tA7u/s6IHZZJPSbGhFQ30zamv0qKttQpPeDEurQ75T32hK+31hh66qqmo4Pz8/LcKJYYba\n2to0k1yjp2RoEZRKEKrf71dDoZBKppKj8Ehf34DKeFcZo9I6wuqMa5VxLS0mLM+EVRkGcr67q19F\nepfK+JaeEc9p6h51z+4Dqt8TUvPWrFerqxrU3bsOqPv3HaHlPfSAjV6x0itmtaa6US0rrVYrK+pU\nQ1OLarO61NKSqpTV4lQIpCa5cWN+qqmpWSsrq0BFRRVDqkElG6m8TjU06BlmVubFNqRSwJkz5/DG\nG1fw+edfyPHKlbdx/vwFDAwMgnTJ8GwE6ZS55UYikcTx4yfx8cef4o9//AoffPAhRkZ2YHh4lHnn\nktLT1YvjR0/g5JFTeP/qNezZtR8VZdUY2j6CvbsPSM9RaTkKr7S2upjD4j0mtLTamWtVgrlsOiqd\n3Ly5gLnQogkQQqqra1UCUAsLi1MFBYUgtyMQaIMAevTocXz11b/i1KkzUqFkMinziR7Fxo0bQQ/L\nazIbzp07h3fffReapoFMCNYlAh7AmjVr5DOCSEK+NsSjMSmff/IHNDUaMOPJp1Bfq0cnk1mEoRCv\np02GWGNjC0wmO2w2L1wkEXpHYzTYdHq9ISkUptW1mpo6CaS8vFKlp9T8/C0pgqRiJmnh0tJyXL78\nBg4dOoLZs+di06bN2LBhA2bOnIkVK1aAIcqXmGA2m8HQ475Dcn358uVYtmwZ1q9fL9fFftYqiJpV\nUlCMiuJy2MxWXL/6ATZtyMf0aTNAMsDiRUtlrom8stpc0gPCE8IriuKDyWxDRXmtRpL5BojVqmgi\nLOgNCUR4ZcuWranVq/Owdu06CM/U1tbLMBFh9sADD5EczCDLCXbDqlWrIApoQ0MDmEcgaeDChQuY\nNm0aFi5cyO8sl3sEoBdeeEGCZv6hsZ4JXFkLr8ODE4ePY0t+AWbPmgMyF4qLyknfHgmki9TsFnRs\nJQV7I/z+NlhIybc8wrYgSSUlEOYJboCRoUVAKYaezBGDwShF5EVHRwz33/8gnn56Fr1UKsNm9erV\neOmll+ilTRAkQdLAm2++KZUVSgsPkOblPDsIlJSUyPDauqUQVRXVUKx2vHruAkqLy/Dg/Q+RoRpl\njfKyniSGdiDD3DGzFjUZyWQWF0ytTjhZt5g3mqwjVE56hD2NxjyBACOSneEkwKS2bi2SoUWgcu30\n6bOM+V1UpAwiFAsLC2UYCYWff/55CWTz5s0yD3bu3ImDBw8SeIcMI+EVkTtiryimYt+CeQvR3GSE\nvqEJb195B4UFRZg+/Sm8tGK1LKqtLIZ2Fkgts0+OBpOCRoNFArKyQJJ+NbKiTWexOpJl5dUptyeg\ntVrsMDQzVOqbVKOJhchgFvNQ7G4EghFwH/bsPYijx07Bprj45bsxOjqK3bt3yxrDnk0KOwWZFyLp\n33jjDbLVB2S8lOwa2DGI+iQ7AwG6uLAE0XC7BHP29Dnk5b2CF19cwZCpBd8vw8nh9GF7cicSwym4\nfRFYFC+C4TilU9QUjXRv07nc/mRNbWPKHwhrQrlmYytq6/QqRwlE32SCkM5YDwq2luDY8dO4dPkK\n5j67AAsXvcC4Xy3jnm2/BCCUEy3N7NmzwaOBDCGR9B999JEEXFRUJMNLeFLkVP7Gzagsr4LZ2CKJ\nhNGBnJzJKCwqk0C2J0YRJXs5CSg5CtTrW1BTb0S0sw+haFwkvMZeTHjEmSwuqUwF29o14UYhCtsM\njqqhuTUl7j1MvO6ebaisqsep06+ip3cQj/92Bp56ejbuvffXTPwH8Pjjj2PSpEkysRcsWIDFixcz\nh56mUjmYNWuWzIfr169jaGiIVs/DnDlzsGjRIobjC6TtfLDFx7FjJ7Bu3Qbcx/ybM3c+Xli6AoXs\nyRqazCirrMMAa4uelb6ovBadPYMIE2ADO2rmkk1HRZOlZdWpSDSuiRi0scljEqkcVdJdSri1hpwu\nwAi6u3jpCr1mwZPTZ8HnD0HQs6BT4YElS5bIPHn22WelkmL+qaeekiDvu+8+CebKlSvSG3feeafc\nM2/eArz88hqZgxcuvI5q5t29v/oNpj42je+YiTnPLcKiJcvpCZP0gM0VQDPbkwBbHzeJwMhjArsG\nm67ZbEsWE0i0s0dzsMCIBFLY3FkEEKszxWuyhEOiryKgYyfPSevMmDkXbaF2Kr8UM2bMkAo/99xz\n0hOi0PEYwFh/kdS9VoaX8IrInw8//FD2bvfccw/mzp1LzzxLYliLRr0Bx0+cQimL7oSJt2PqE9Px\n4srVmP70HEyl91sY9g3M34ZmC0xWF+y+MOJ9g98AaTS0JOm+W0BaWXgoqqnVrhpblJRetOKkuZ7+\nhARy5vxF6eqcKU9g8dLlLHibZDUXhU+ElAAjWIznFllfBHsJWhaJf+nSJVnpxdzUqVMZRutYSFfK\njsFIxjxz9jziXT1Yumw5nN4AhncCg6TeOh4LPCSbqvomVIim0aygjoD84Y5vQot0liwpr0t1xAc0\npydEEB4hBMEcMSkpcS8SzBfsgMcfxfvXfy8pcPJjM7Bk2Uqy00uyYoswEUwllBTVW9DsZ599hq+/\n/hrvvPMOvvzyS/zpT38CT5l45plnZFEUHltPQ5Szm6hhsT3C9uetq+8hpWVw7rVLOHbqLPYcPApD\niw0vrWFRLqlAeZ0BBosTFey7hIdqedLkQYzJrniTFdX6VLxnuyYUtbtId+421ebwqwSRqq5rxuq1\n+Xg5bxOWr3xFAl34/ArkTp2OVzZswbr1G7Fy5UrJWvPnz5eJPG/ePOkZUSjPnj3LRvMM4vG4LIx3\n3323ZDlRS5YuXYp58xcyqV/EosVLUMIWyBMIoqKmFlV1jdhSVIqVeevx4qo8TJ81F6VVdRJINdv4\nBia9zeVjqTCMFUTFHUxW1hlSZAHNw77GzfOBPxxTea06vKGUk7EoEkzE5tqNW7GluBJbS6slczCH\nsCl/iwwRYeGbQAQjCSa7//77JUjBZIK9RNKLXBIAxDOCHJ6YNh3TnpxBFpwm2eq302fgn37xS/z8\nV/fx+mmsWrsBdaT/BrMFLU4Patk4FlXWS69426LfeERxhZLlNfpUNLZNEyC8bR0IdfSowWiXAJOy\nOHxyLtzZK0VcC8Yw29ysrhbGNpOP8e12e5krNbIOiIIm6suiRc+TuZ6h8jPlKGQZ438+vSD6t4UL\nF0uymM2Enz9vMcFMx8urX5H1af6C5yXdi/yM8Cgs3l1a1YBaeqO6wQiLPQBGDSoq6zSPl72W0eZP\nNls9qc6+Ec3hb4c33IW2zn61vSeh8jrlpuKCITyhTjm62iLwt8dgVJwyRv2BiGgTeMYOy3ODOMWJ\n09uG9Vvw8ipW6WWr5Olv1cq1WPlSHpa/+LI8ES6YvwTznlssx1Ur87DgueexaOFSdrzLxBlDfo/T\nEWDzGEFXfBt6u5Ow20hGZjeMBjv7s2Z2wAFBQIykMOnX6iMQXyo+sEPzhnsIYhsiXYO3gIRiAwjy\n2CkAecMx+KKdcIeicAbDMkZFSx0OxeFxh9hyd8oXu9mZhtpiVMYAlzMoRzPPECajQiVr2NVW3ZKq\n8jo01BqQv2Er5j+7GOvyNsNidiIa6kI4GINTCSLWPoCdI7vRE0/A62yHxeSFUc+S0NaN8poGzRkM\n2XQ1eiVZ3WhLReJDmifUjY7eYfQnNXUYB9TB0UyqPwkMpfYg1j+EUW0fRtS9aGdVHRhOo3sgSXba\nge0Uvy+K/r6klGCgAztGMzyn75JABNCRYRW7Mgd5Jh+Ue/btPSqfG+b3iz0lxdXIW7NJru/ZfRgZ\n9RACvk6MDu+RcvrkZRw7cgGDA4DfG0cLwTgcYZGrmsXtGwNSUdea8kf6NYcvRiWp3OhuNXPglJDU\ngePncf7yuzh86jVc+/QLXP3oD9jLY+nZi1dw5OR5Hnm/wuVL7+AE9wnlVezDae69+Ppb+PKfv8bo\niIbXLryJa+9/ireuXENq525o6n75THIojQP7j7ObPoBDB0/yRHkZn336Jav/Nbz15nU2m5/j04//\nBa+99i4++eiPfNe/4dLr72P3rhPoiA7eAmL1+EVl9yfr9U4me0LzBrsR6dyOjq6k2rstpXb370iN\npPbjwJGz5PaDeP137+H8629jaHQX9hMMMgdw+Xdv4913PsDJE+do6QSV3Iur717H9Q8+xUcf/h7n\nz12U61fevIqzZ15DPNYnz98q9qCXngWBHz52Fq++egUffvIl3nrrQ5w8cwmHD5/HO1d/j4sX38Oe\nfadw6eI1vHftCxrlKvbuJ53HRuB0d6C82qC5/GStukZHsqrWKoEEI/0SiK+tR3X5OtVWJZiy2Nvg\n9sdgtnoRCHfDy7htMjkkTYsCKrrTowQVI6ucOH5WKn/m9AV8cO0TeuA9HDxwTJ7wDuw/ilfPX8Le\nPYeYvP3y56HjJ87i0NEzOHX2IjvbXaziYCvUh96BUdidEdjsIYSjAwi09WBkx35AO4rBRAYdsSGu\nd8DhakdppV5jibDpKqpbWdmNqUC4TyMAhNq3UfG46vC0SyBmqx8tZAtjq1tKc4sLBiajoF9RHAfZ\nkR45fBJ9vdsZFl/gP/79P6XC77/3ET5mGAoPCesLsK9d+B0te0WCGUrswMlT53Hg8ClcuPw2Dh9/\nFd39I7A528ao1Rmm0bpAgyIYIbhtacR7R6UwYmjEOMIdgyipaNLsbgLRN3uSFTXmlD/Uqzk8ZCaG\nlwBBLwivSCDCGw5PhIB8UuyeNtm4sR/jWYVnhsERDJAMBJj9+45IERYfISG4WUzFj20i7MQvIeIH\nuG0kCYWG6Iz1skaM1SYf6V18d4geEUDE+zyBOHsurpGdhJEVVxSxHr4rocl7ET2VtUamBE+IViU0\n3KBXRk0t3p1+kSPt29R2boh2DKa9gc4URWXrorq8YZXty43WxaWyI5aNJVt6+bOm+ClT/CBn4Zz4\n+dNmdUoRP3sKEWtij9hrbG6VwtOoyqZVZS+lttrdKkNEJSCVBXdMwt2qP9SlUlFpWAJT6R21szup\nDiRUNbljr1pZ07xDcQZiujVrC3dUVBtS5ZVswpqs2ppXCjKNBlumus6ksZlUi8tqM0WlVZnCkupM\nQVF5ZvPW0symgqLMhvzCzMZNBZn16/K/IxvWb/6LcnN93SubMq+s3ZhZm7chk7d2Q2b5qjWZFavX\nZthTZdas53r+1szGguJMfmF5hu2QHDcVVEjZXFiVKSqrz1TVmTJ6ozNjsngy+mbrKI8aMV1391CL\n3e5v9XrbrZFIt9LTk7BHoz32eHybwsOWjcdMjjElHIkpoXCHwjOIEmwLKzzDK/5AmxK4ITzhKT5f\nQPF6/YrH41PYskgR8zfXvr0u91Dsbo+iuNyK1TEmisuruHzcH4wqPJMrPDxRIlK8gXYlEIopDEcl\n1p1QuvuGFB749NSrVKfTTdBNmPhTXVb2T3Tjs26X9zpdtm7c+IlyHJPv/QtM/EPupvxv//f37e8a\nd3Puxph1Q4dxN/WY8Gdy2+0/+yn3jtctWLgk69e/eTD7kUmTs+/91f0T2LhNuOvuf5zwwIMPT/jl\nvb+ekDt5anbulMnfk5xbMnnyZMrUP5Pc3ClSpk59/JZMmfLYLRnbJ5698V25j2bnTM7NZpec/Whu\nztiYM3ls781npvw2e3Lu49k5uY9lPzppSvakR3Oz2T1n3XnXP+h0P/v7O75lnaxbVppw20Rd9sQJ\nY5b6q/8V/u//afl9+Yv/Uh435gQpP/Dv1z//Hp2O4LOo53jdAw89mN3b35dlNJuyXB73eAIY7wt4\ns+oaarPMraasnMmP0kIPj8nkh74Zb1xPmjSJQuvROjclh5a8Kd+e//6asHpuzsO08sPZUyY/ckMm\n8f4ROZ/z6CO0/NiYmzMpO/dRRkBO7i3Jzc3NvucXPx8z9sTbbxunG/v7TrxmT8ySohv3w39jn6xb\nQkv9Vflm/zjhgB+UbG7LooOFjB/33TWh6cyZT42/7SdC0R8/f1uf/wJm63Xm8Uo4+AAAAABJRU5E\nrkJggg=="
                }
            },
            "moduleGroup": {
                "module": [
                    {
                        "metadata": {
                            "data": {
                                "_key": "__creationDateKey",
                                "_value": ""
                            }
                        },
                        "input": [
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "File",
                                            "_extension": "",
                                            "_description": "Any type of data file"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "values": {
                                    "value": "pipeline://cranium.loni.usc.edu/smartline/Smartline.jar"
                                },
                                "_id": "smartline_BETnii.gz_FLIRTnii.gz_1.jarfile",
                                "_name": "jar file",
                                "_required": "false",
                                "_enabled": "true",
                                "_predefined": "true",
                                "_order": "0",
                                "_prefix": "-Djava.awt.headless=true -jar",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "Nii Gz",
                                            "_extension": "nii.gz",
                                            "_description": "Compressed Nifti"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "smartline_BETnii.gz_FLIRTnii.gz_1.smartlineinput",
                                "_name": "smartline input",
                                "_required": "true",
                                "_enabled": "true",
                                "_order": "1"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "1"
                                },
                                "values": {
                                    "value": "FSL"
                                },
                                "_id": "smartline_BETnii.gz_FLIRTnii.gz_1.softwarename",
                                "_name": "software name",
                                "_required": "false",
                                "_enabled": "true",
                                "_predefined": "true",
                                "_order": "2"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "1"
                                },
                                "values": {
                                    "value": "4.1.4"
                                },
                                "_id": "smartline_BETnii.gz_FLIRTnii.gz_1.softwareversion",
                                "_name": "software version",
                                "_required": "false",
                                "_enabled": "true",
                                "_predefined": "true",
                                "_order": "3"
                            }
                        ],
                        "output": {
                            "format": {
                                "fileTypes": {
                                    "filetype": {
                                        "need": "hdr",
                                        "_name": "Analyze Image",
                                        "_extension": "img",
                                        "_description": "Analyze Image file"
                                    }
                                },
                                "_type": "File",
                                "_cardinality": "1"
                            },
                            "_id": "smartline_BETnii.gz_FLIRTnii.gz_1.smartlineoutput",
                            "_name": "smartline output",
                            "_required": "false",
                            "_enabled": "true",
                            "_order": "4"
                        },
                        "_id": "smartline_BETnii.gz_FLIRTnii.gz_1",
                        "_name": "smartline_BET (nii.gz)_FLIRT (nii.gz)",
                        "_package": "Pipeline Utilities",
                        "_description": "Smartline conversion from type (nii.gz) of module BET (nii.gz) to type (img,hdr) of module FLIRT (nii.gz) of package FSL",
                        "_posX": "282",
                        "_posY": "235",
                        "_sourceCode": "",
                        "_location": "pipeline://cranium.loni.usc.edu/java",
                        "_gridVariables": "h_vmem=5.5",
                        "_smartModule": "true"
                    },
                    {
                        "authors": {
                            "author": {
                                "_fullName": "D. Cornelius Hojatkashani",
                                "_email": "cornelius.hojatkashani@loni.ucla.edu ",
                                "_website": "http://loni.ucla.edu "
                            }
                        },
                        "citations": {
                            "citation": "S.M. Smith, M. Jenkinson, M.W. Woolrich, C.F. Beckmann, T.E.J. Behrens, H. Johansen-Berg, P.R. Bannister, M. De Luca, I. Drobnjak, D.E. Flitney, R. Niazy, J. Saunders, J. Vickers, Y. Zhang, N. De Stefano, J.M. Brady, and P.M. Matthews. Advances in functional and structural MR image analysis and implementation as FSL. NeuroImage, 23(S1):208-219, 2004\n\nPMID: 15501092"
                        },
                        "tag": [
                            "FMRI",
                            "registration",
                            "linear"
                        ],
                        "uri": "http://www.fmrib.ox.ac.uk/fsl/flirt/index.html",
                        "metadata": {
                            "data": {
                                "_key": "__creationDateKey",
                                "_value": "Mon Sep 18 19:45:14 PDT 2006"
                            }
                        },
                        "input": [
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": [
                                            {
                                                "_name": "Nii Gz",
                                                "_extension": "nii.gz",
                                                "_description": "Compressed Nifti"
                                            },
                                            {
                                                "need": "hdr",
                                                "_name": "Analyze Image",
                                                "_extension": "img",
                                                "_description": "Analyze Image file"
                                            }
                                        ]
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.Input",
                                "_name": "Input",
                                "_description": "Specifies the input volume file path.",
                                "_required": "true",
                                "_enabled": "true",
                                "_order": "0",
                                "_prefix": "-in",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": [
                                            {
                                                "_name": "Nii Gz",
                                                "_extension": "nii.gz",
                                                "_description": "Compressed Nifti"
                                            },
                                            {
                                                "need": "hdr",
                                                "_name": "Analyze Image",
                                                "_extension": "img",
                                                "_description": "Analyze Image file"
                                            }
                                        ]
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "values": {
                                    "value": "pipeline://localhost//Users/cnmc/test/IBSR_01_ana_brainmask.nii.gz"
                                },
                                "_id": "FLIRTnii.gz_1.Reference",
                                "_name": "Reference",
                                "_description": "Specifies the input reference image.",
                                "_required": "true",
                                "_enabled": "true",
                                "_order": "1",
                                "_prefix": "-ref",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "XFM file",
                                            "_extension": "xfm",
                                            "_description": "MNC transformation"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "dependencies": {
                                    "dependent": "Apply XFM",
                                    "dependsOn": "Apply XFM"
                                },
                                "_id": "FLIRTnii.gz_1.InitialMatrixFile",
                                "_name": "Initial Matrix File",
                                "_description": "Specifies the Input 4x4 affine matrix - autodetects format ascii/medx.  Must specify <matrix-filename>.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "3",
                                "_prefix": "-init",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "enumeration": [
                                        "char",
                                        "short",
                                        "int",
                                        "float",
                                        "double"
                                    ],
                                    "_type": "Enumerated",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.Datatype",
                                "_name": "Datatype",
                                "_description": "Forces the output to one of the following data types:  char, short, int, float, double.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "5",
                                "_prefix": "-datatype",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "enumeration": [
                                        "mutualinfo",
                                        "corratio",
                                        "normcorr",
                                        "normmi",
                                        "leastsq"
                                    ],
                                    "_type": "Enumerated",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.Cost",
                                "_name": "Cost",
                                "_description": "Specifies the intensity based cost function.  \nOptions are: mutualinfo, corratio, normcorr, normmi, leastsq. \n(Default is corratio)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "7",
                                "_prefix": "-cost",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "enumeration": [
                                        "mutualinfo",
                                        "corratio",
                                        "normcorr",
                                        "normmi",
                                        "leastsq"
                                    ],
                                    "_type": "Enumerated",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.SearchCost",
                                "_name": "Search Cost",
                                "_description": "Specifies the type of search cost.  \nOptions are:  mutualinfo, corratio, normcorr, normmi, leastsq.\n(Default is corratio)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "6",
                                "_prefix": "-searchcost",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "enumeration": [
                                        "quaternion",
                                        "euler"
                                    ],
                                    "_type": "Enumerated",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.AngleRep",
                                "_name": "Angle Rep",
                                "_description": "Specifies the type of angle rep.\nOptions are: {quaternion,euler}   (default is euler)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "8",
                                "_prefix": "-anglerep",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "enumeration": [
                                        "trilinear",
                                        "nearestneighbour",
                                        "sinc"
                                    ],
                                    "_type": "Enumerated",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.Interpolation",
                                "_name": "Interpolation",
                                "_description": "Specifies the type of final interpolation.  \nOptions are: trilinear, nearestneighbour, sinc.  \n(Default is trilinear)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "9",
                                "_prefix": "-interp",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.SincWidth",
                                "_name": "Sinc Width",
                                "_description": "Specifies the full sinc width in voxels.\n(Default is 7)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "10",
                                "_prefix": "-sincwidth",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.Bins",
                                "_name": "Bins",
                                "_description": "Specifies the number of histogram bins.  \n(Default is 256)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "12",
                                "_prefix": "-bins",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "enumeration": [
                                        "6",
                                        "7",
                                        "9",
                                        "12"
                                    ],
                                    "_type": "Enumerated",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.TransformDegreesofFreedom",
                                "_name": "Transform Degrees of Freedom",
                                "_description": "Specifies the number of degrees of freedom.  \n(Default is 12)\n\nNote: Choose from 6,7,9 or 12 Degrees of Freedom (DOF) for full 3D registrations. Also includes a 3DOF 2D-to-2D registration mode which is selected using the -2D option. Note that it does not perform any search in 2D mode, and cannot deal with 2D to 3D registrations. More flexible DOF options are provided by the specific schedule files provided in $FSLDIR/etc/flirtsch.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "13",
                                "_prefix": "-dof",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "FLIRTnii.gz_1.NoSampling",
                                "_name": "No Sampling",
                                "_description": "Do not change input sampling.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "14",
                                "_prefix": "-noresample",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "FLIRTnii.gz_1.ForceScaling",
                                "_name": "Force Scaling",
                                "_description": "Forces rescaling even for low-res images.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "15",
                                "_prefix": "-forcescaling",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.MinSampling",
                                "_name": "Min Sampling",
                                "_description": "Sets minimum voxel dimension for sampling (in mm).",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "16",
                                "_prefix": "-minsampling",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "dependencies": {
                                    "dependent": [
                                        "Padding Size",
                                        "Initial Matrix File"
                                    ],
                                    "dependsOn": "Initial Matrix File"
                                },
                                "_id": "FLIRTnii.gz_1.ApplyXFM",
                                "_name": "Apply XFM",
                                "_description": "Applies transform (no optimization).\n(Requires -init option)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "17",
                                "_prefix": "-applyxfm",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.ApplyXFMwithIsotropicResample",
                                "_name": "Apply XFM with Isotropic Resample",
                                "_description": "As applyxfm but forces isotropic resampling.  \nMust specify <scale>.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "18",
                                "_prefix": "-applyisoxfm",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "dependencies": {
                                    "dependsOn": "Apply XFM"
                                },
                                "_id": "FLIRTnii.gz_1.PaddingSize",
                                "_name": "Padding Size",
                                "_description": "Interpolates outside image by size (in voxels).\n(Requires -applyxfm option)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "19",
                                "_prefix": "-paddingsize",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "2"
                                },
                                "_id": "FLIRTnii.gz_1.SearchX",
                                "_name": "Search X",
                                "_description": "Specifies <min_angle> & <max_angle> for x-dimension  angular search range (in degrees). \n(Default is -90 90)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "20",
                                "_prefix": "-searchrx",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "2"
                                },
                                "_id": "FLIRTnii.gz_1.SearchY",
                                "_name": "Search Y",
                                "_description": "Specifies <min_angle> & <max_angle> for y-dimension angular search range (in degrees). \n(Default is -90 90)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "21",
                                "_prefix": "-searchry",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "2"
                                },
                                "_id": "FLIRTnii.gz_1.SearchZ",
                                "_name": "Search Z",
                                "_description": "Specifies <min_angle> & <max_angle> for z-dimension angular search range (in degrees). \n(Default is -90 90)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "22",
                                "_prefix": "-searchrz",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "FLIRTnii.gz_1.NoSearch",
                                "_name": "No Search",
                                "_description": "Sets all angular search ranges to 0 0.\n(Sets 0 0 for -searchrx, -searchry and -searchrz)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "23",
                                "_prefix": "-nosearch",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.CoarseSearch",
                                "_name": "Coarse Search",
                                "_description": "Specifies angular search range by specifying <delta_angle> (in degrees).  \n(Default is 60)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "24",
                                "_prefix": "-coarsesearch",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.FineSearch",
                                "_name": "Fine Search",
                                "_description": "Specifies angular search range by specifying <delta_angle> (in degrees).\n(Default is 18)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "25",
                                "_prefix": "-finesearch ",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "File",
                                            "_extension": "",
                                            "_description": "Any type of data file"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.Schedule",
                                "_name": "Schedule",
                                "_description": "Schedule file specifies what transformations/DOF are allowed and how the optimisation is performed.\nMust specify <schedule-file>. \n(Replaces default schedule)\n\nNote: Several other schedule files could be used - including 3D translation only schedules, etc. These are all stored in ${FSLDIR}/etc/flirtsch.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "26",
                                "_prefix": "-schedule",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": [
                                            {
                                                "_name": "Nii Gz",
                                                "_extension": "nii.gz",
                                                "_description": "Compressed Nifti"
                                            },
                                            {
                                                "need": "hdr",
                                                "_name": "Analyze Image",
                                                "_extension": "img",
                                                "_description": "Analyze Image file"
                                            }
                                        ]
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.ReferenceWeight",
                                "_name": "Reference Weight",
                                "_description": "Use weights for reference volume.  \nMust specify input <volume> for weights.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "27",
                                "_prefix": "-refweight",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": [
                                            {
                                                "_name": "Nii Gz",
                                                "_extension": "nii.gz",
                                                "_description": "Compressed Nifti"
                                            },
                                            {
                                                "need": "hdr",
                                                "_name": "Analyze Image",
                                                "_extension": "img",
                                                "_description": "Analyze Image file"
                                            }
                                        ]
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.InputWeight",
                                "_name": "Input Weight",
                                "_description": "Use weights for input volume.  \nMust specify input <volume> for weights.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "28",
                                "_prefix": "-inweight",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "FLIRTnii.gz_1.2D",
                                "_name": "2D",
                                "_description": "Use 2D rigid body mode.\n(Ignores -dof option)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "29",
                                "_prefix": "-2D",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.Verbose",
                                "_name": "Verbose",
                                "_description": "Specifies level of verboseness.  \n(0 is least and default)",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "30",
                                "_prefix": "-verbose",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "FLIRTnii.gz_1.Pause",
                                "_name": "Pause",
                                "_description": "Enables pause at each stage of transformation.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "31",
                                "_prefix": "-i",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "enumeration": [
                                        "rectangular",
                                        "hanning",
                                        "blackman"
                                    ],
                                    "_type": "Enumerated",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.SincWindow",
                                "_name": "Sinc Window",
                                "_description": "Specifies the type of sinc window.  \nOptions are: rectangular, hanning, blackman.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "11",
                                "_prefix": "-sincwindow",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "FLIRTnii.gz_1.Version",
                                "_name": "Version",
                                "_description": "Prints the version information and exit",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "32",
                                "_prefix": "-version",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "FLIRTnii.gz_1.Help",
                                "_name": "Help",
                                "_description": "Prints help information and exit.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "33",
                                "_prefix": "-help",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            }
                        ],
                        "output": [
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "Nii Gz",
                                            "_extension": "nii.gz",
                                            "_description": "Compressed Nifti"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.Output",
                                "_name": "Output",
                                "_description": "Specifies the output volume file path.",
                                "_required": "true",
                                "_enabled": "true",
                                "_order": "2",
                                "_prefix": "-out",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "XFM file",
                                            "_extension": "xfm",
                                            "_description": "MNC transformation"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "FLIRTnii.gz_1.OutputMatrixFile",
                                "_name": "Output Matrix File",
                                "_description": "Outputs the matrix in 4x4 ascii format.\nMust specify <matrix-filename>.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "4",
                                "_prefix": "-omat",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            }
                        ],
                        "license": "http://www.fmrib.ox.ac.uk/fsl/fsl/licence.html\n\nLICENCE\n\nFMRIB Software Library, Release 4.1 (c) 2008, The University of Oxford\n(the \"Software\")\n\nThe Software remains the property of the University of Oxford (\"the\nUniversity\").\n\nThe Software is distributed \"AS IS\" under this Licence solely for\nnon-commercial use in the hope that it will be useful, but in order\nthat the University as a charitable foundation protects its assets for\nthe benefit of its educational and research purposes, the University\nmakes clear that no condition is made or to be implied, nor is any\nwarranty given or to be implied, as to the accuracy of the Software,\nor that it will be suitable for any particular purpose or for use\nunder any specific conditions. Furthermore, the University disclaims\nall responsibility for the use which is made of the Software. It\nfurther disclaims any liability for the outcomes arising from using\nthe Software.\n\nThe Licensee agrees to indemnify the University and hold the\nUniversity harmless from and against any and all claims, damages and\nliabilities asserted by third parties (including claims for\nnegligence) which arise directly or indirectly from the use of the\nSoftware or the sale of any products based on the Software.\n\nNo part of the Software may be reproduced, modified, transmitted or\ntransferred in any form or by any means, electronic or mechanical,\nwithout the express permission of the University. The permission of\nthe University is not required if the said reproduction, modification,\ntransmission or transference is done without financial return, the\nconditions of this Licence are imposed upon the receiver of the\nproduct, and all original and amended source code is included in any\ntransmitted product. You may be held legally responsible for any\ncopyright infringement that is caused or encouraged by your failure to\nabide by these terms and conditions.\n\nYou are not permitted under this Licence to use this Software\ncommercially. Use for which any financial return is received shall be\ndefined as commercial use, and includes (1) integration of all or part\nof the source code or the Software into a product for sale or license\nby or on behalf of Licensee to third parties or (2) use of the\nSoftware or any derivative of it for research with the final aim of\ndeveloping software products for sale or license to a third party or\n(3) use of the Software or any derivative of it for research with the\nfinal aim of developing non-software products for sale or license to a\nthird party, or (4) use of the Software to provide any service to an\nexternal organisation for which payment is received. If you are\ninterested in using the Software commercially, please contact Isis\nInnovation Limited (\"Isis\"), the technology transfer company of the\nUniversity, to negotiate a licence. Contact details are:\ninnovation@isis.ox.ac.uk quoting reference BS/3497.",
                        "_id": "FLIRTnii.gz_1",
                        "_name": "FLIRT (nii.gz)",
                        "_package": "FSL",
                        "_version": "4.1.4",
                        "_description": "FLIRT (FMRIB's Linear Image Registration Tool) is a fully automated robust and accurate tool for linear (affine) intra- and inter-modal brain image registration. ",
                        "_icon": "0",
                        "_posX": "425",
                        "_posY": "188",
                        "_sourceCode": "",
                        "_location": "pipeline://cranium.loni.usc.edu/flirt",
                        "_executableVersion": "4.1.4"
                    },
                    {
                        "authors": {
                            "author": {
                                "_fullName": "D. Cornelius Hojatkashani",
                                "_email": "cornelius.hojatkashani@loni.ucla.edu ",
                                "_website": "http://loni.ucla.edu "
                            }
                        },
                        "citations": {
                            "citation": "S.M. Smith, M. Jenkinson, M.W. Woolrich, C.F. Beckmann, T.E.J. Behrens, H. Johansen-Berg, P.R. Bannister, M. De Luca, I. Drobnjak, D.E. Flitney, R. Niazy, J. Saunders, J. Vickers, Y. Zhang, N. De Stefano, J.M. Brady, and P.M. Matthews. Advances in functional and structural MR image analysis and implementation as FSL. NeuroImage, 23(S1):208-219, 2004\n\nPMID: 15501092"
                        },
                        "tag": "skull stripping",
                        "uri": "http://www.fmrib.ox.ac.uk/fsl/bet2/index.html",
                        "metadata": {
                            "data": {
                                "_key": "__creationDateKey",
                                "_value": "Mon Sep 18 19:22:04 PDT 2006"
                            }
                        },
                        "input": [
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": [
                                            {
                                                "_name": "Nii Gz",
                                                "_extension": "nii.gz",
                                                "_description": "Compressed Nifti"
                                            },
                                            {
                                                "need": "hdr",
                                                "_name": "Analyze Image",
                                                "_extension": "img",
                                                "_description": "Analyze Image file"
                                            }
                                        ]
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "values": {
                                    "value": "pipeline://localhost//Users/cnmc/test/IBSR_01_ana.nii.gz"
                                },
                                "_id": "BETnii.gz_1.InputFile",
                                "_name": "Input File",
                                "_description": "Specifies the input file.",
                                "_required": "true",
                                "_enabled": "true",
                                "_order": "0"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "BETnii.gz_1.OutlineBrainsurface",
                                "_name": "Outline Brainsurface",
                                "_description": "Generates brain surface outline overlaid onto original image.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "2",
                                "_prefix": "-o",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "BETnii.gz_1.DontSegmentOutput",
                                "_name": "Don't Segment Output",
                                "_description": "Don't generate segmented brain image output.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "5",
                                "_prefix": "-n",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "BETnii.gz_1.FractionalIntensityThreshold",
                                "_name": "Fractional Intensity Threshold",
                                "_description": "Specifies fractional intensity threshold (0->1); default=0.5; smaller values give larger brain outline estimates",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "6",
                                "_prefix": "-f",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "BETnii.gz_1.VerticalGradientThreshold",
                                "_name": "Vertical Gradient Threshold",
                                "_description": "Specifies vertical gradient in fractional intensity threshold (-1->1). \n(Default=0)\nNote: Positive values give larger brain outline at bottom, smaller at top.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "7",
                                "_prefix": "-g",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "BETnii.gz_1.HeadRadius",
                                "_name": "Head Radius",
                                "_description": "Specifies head radius (mm not voxels)\nNote: Initial surface sphere is set to half of this.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "9",
                                "_prefix": "-r",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "3"
                                },
                                "_id": "BETnii.gz_1.CenterofGravity",
                                "_name": "Center of Gravity",
                                "_description": "Specifies center-of-gravity (mm not voxels) of initial mesh surface.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "10",
                                "_prefix": "-c",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "BETnii.gz_1.ApplyThresholding",
                                "_name": "Apply Thresholding",
                                "_description": "Apply thresholding to segmented brain image and mask.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "11",
                                "_prefix": "-t",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "BETnii.gz_1.Verbose",
                                "_name": "Verbose",
                                "_description": "Enables verbose text output.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "8",
                                "_prefix": "-v",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            }
                        ],
                        "output": [
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "Nii Gz",
                                            "_extension": "nii.gz",
                                            "_description": "Compressed Nifti"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "BETnii.gz_1.OutputFile",
                                "_name": "Output File",
                                "_description": "Specifies the output file.",
                                "_required": "true",
                                "_enabled": "true",
                                "_order": "1"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "Nii Gz",
                                            "_extension": "nii.gz",
                                            "_description": "Compressed Nifti"
                                        }
                                    },
                                    "transform": [
                                        {
                                            "_order": "0",
                                            "_operation": "Subtract",
                                            "__text": ".nii.gz"
                                        },
                                        {
                                            "_order": "1",
                                            "_operation": "Append",
                                            "__text": "_mask.nii.gz"
                                        }
                                    ],
                                    "_type": "File",
                                    "_cardinality": "1",
                                    "_transformationBase": "Output File"
                                },
                                "_id": "BETnii.gz_1.CreateBinaryMask",
                                "_name": "Create Binary Mask",
                                "_description": "Generates binary brain mask.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "3",
                                "_prefix": "-m ",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false",
                                "_includeTransformedParameter": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "Nii Gz",
                                            "_extension": "nii.gz",
                                            "_description": "Compressed Nifti"
                                        }
                                    },
                                    "transform": [
                                        {
                                            "_order": "0",
                                            "_operation": "Subtract",
                                            "__text": ".img"
                                        },
                                        {
                                            "_order": "1",
                                            "_operation": "Subtract",
                                            "__text": ".hdr"
                                        },
                                        {
                                            "_order": "2",
                                            "_operation": "Append",
                                            "__text": "_skull.img"
                                        }
                                    ],
                                    "_type": "File",
                                    "_cardinality": "1",
                                    "_transformationBase": "Output File"
                                },
                                "_id": "BETnii.gz_1.GenerateSkullImage",
                                "_name": "Generate Skull Image",
                                "_description": "Generates approximate skull image.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "4",
                                "_prefix": "-s",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false",
                                "_includeTransformedParameter": "false"
                            }
                        ],
                        "license": "http://www.fmrib.ox.ac.uk/fsl/fsl/licence.html\n\nLICENCE\n\nFMRIB Software Library, Release 4.1 (c) 2008, The University of Oxford\n(the \"Software\")\n\nThe Software remains the property of the University of Oxford (\"the\nUniversity\").\n\nThe Software is distributed \"AS IS\" under this Licence solely for\nnon-commercial use in the hope that it will be useful, but in order\nthat the University as a charitable foundation protects its assets for\nthe benefit of its educational and research purposes, the University\nmakes clear that no condition is made or to be implied, nor is any\nwarranty given or to be implied, as to the accuracy of the Software,\nor that it will be suitable for any particular purpose or for use\nunder any specific conditions. Furthermore, the University disclaims\nall responsibility for the use which is made of the Software. It\nfurther disclaims any liability for the outcomes arising from using\nthe Software.\n\nThe Licensee agrees to indemnify the University and hold the\nUniversity harmless from and against any and all claims, damages and\nliabilities asserted by third parties (including claims for\nnegligence) which arise directly or indirectly from the use of the\nSoftware or the sale of any products based on the Software.\n\nNo part of the Software may be reproduced, modified, transmitted or\ntransferred in any form or by any means, electronic or mechanical,\nwithout the express permission of the University. The permission of\nthe University is not required if the said reproduction, modification,\ntransmission or transference is done without financial return, the\nconditions of this Licence are imposed upon the receiver of the\nproduct, and all original and amended source code is included in any\ntransmitted product. You may be held legally responsible for any\ncopyright infringement that is caused or encouraged by your failure to\nabide by these terms and conditions.\n\nYou are not permitted under this Licence to use this Software\ncommercially. Use for which any financial return is received shall be\ndefined as commercial use, and includes (1) integration of all or part\nof the source code or the Software into a product for sale or license\nby or on behalf of Licensee to third parties or (2) use of the\nSoftware or any derivative of it for research with the final aim of\ndeveloping software products for sale or license to a third party or\n(3) use of the Software or any derivative of it for research with the\nfinal aim of developing non-software products for sale or license to a\nthird party, or (4) use of the Software to provide any service to an\nexternal organisation for which payment is received. If you are\ninterested in using the Software commercially, please contact Isis\nInnovation Limited (\"Isis\"), the technology transfer company of the\nUniversity, to negotiate a licence. Contact details are:\ninnovation@isis.ox.ac.uk quoting reference BS/3497.",
                        "_id": "BETnii.gz_1",
                        "_name": "BET (nii.gz)",
                        "_package": "FSL",
                        "_version": "4.1.4",
                        "_description": "BET (Brain Extraction Tool) deletes non-brain tissue from an image of the whole head. It can also estimate the external skull surface.",
                        "_icon": "0",
                        "_posX": "91",
                        "_posY": "218",
                        "_sourceCode": "",
                        "_location": "pipeline://cranium.loni.usc.edu/bet",
                        "_executableVersion": "4.1.4"
                    },
                    {
                        "authors": {
                            "author": {
                                "_fullName": "D. Cornelius Hojatkashani",
                                "_email": "cornelius.hojatkashani@loni.ucla.edu ",
                                "_website": "http://loni.ucla.edu "
                            }
                        },
                        "citations": {
                            "citation": "S.M. Smith, M. Jenkinson, M.W. Woolrich, C.F. Beckmann, T.E.J. Behrens, H. Johansen-Berg, P.R. Bannister, M. De Luca, I. Drobnjak, D.E. Flitney, R. Niazy, J. Saunders, J. Vickers, Y. Zhang, N. De Stefano, J.M. Brady, and P.M. Matthews. Advances in functional and structural MR image analysis and implementation as FSL. NeuroImage, 23(S1):208-219, 2004\n\nPMID: 15501092"
                        },
                        "tag": "skull stripping",
                        "uri": "http://www.fmrib.ox.ac.uk/fsl/bet2/index.html",
                        "metadata": {
                            "data": {
                                "_key": "__creationDateKey",
                                "_value": "Mon Sep 18 19:22:04 PDT 2006"
                            }
                        },
                        "input": [
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": [
                                            {
                                                "_name": "Nii Gz",
                                                "_extension": "nii.gz",
                                                "_description": "Compressed Nifti"
                                            },
                                            {
                                                "need": "hdr",
                                                "_name": "Analyze Image",
                                                "_extension": "img",
                                                "_description": "Analyze Image file"
                                            }
                                        ]
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "BETnii.gz_2.InputFile",
                                "_name": "Input File",
                                "_description": "Specifies the input file.",
                                "_required": "true",
                                "_enabled": "true",
                                "_order": "0"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "BETnii.gz_2.OutlineBrainsurface",
                                "_name": "Outline Brainsurface",
                                "_description": "Generates brain surface outline overlaid onto original image.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "2",
                                "_prefix": "-o",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "BETnii.gz_2.DontSegmentOutput",
                                "_name": "Don't Segment Output",
                                "_description": "Don't generate segmented brain image output.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "5",
                                "_prefix": "-n",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "BETnii.gz_2.FractionalIntensityThreshold",
                                "_name": "Fractional Intensity Threshold",
                                "_description": "Specifies fractional intensity threshold (0->1); default=0.5; smaller values give larger brain outline estimates",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "6",
                                "_prefix": "-f",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "BETnii.gz_2.VerticalGradientThreshold",
                                "_name": "Vertical Gradient Threshold",
                                "_description": "Specifies vertical gradient in fractional intensity threshold (-1->1). \n(Default=0)\nNote: Positive values give larger brain outline at bottom, smaller at top.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "7",
                                "_prefix": "-g",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "1"
                                },
                                "_id": "BETnii.gz_2.HeadRadius",
                                "_name": "Head Radius",
                                "_description": "Specifies head radius (mm not voxels)\nNote: Initial surface sphere is set to half of this.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "9",
                                "_prefix": "-r",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "Number",
                                    "_cardinality": "3"
                                },
                                "_id": "BETnii.gz_2.CenterofGravity",
                                "_name": "Center of Gravity",
                                "_description": "Specifies center-of-gravity (mm not voxels) of initial mesh surface.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "10",
                                "_prefix": "-c",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "BETnii.gz_2.ApplyThresholding",
                                "_name": "Apply Thresholding",
                                "_description": "Apply thresholding to segmented brain image and mask.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "11",
                                "_prefix": "-t",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "0"
                                },
                                "_id": "BETnii.gz_2.Verbose",
                                "_name": "Verbose",
                                "_description": "Enables verbose text output.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "8",
                                "_prefix": "-v",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            }
                        ],
                        "output": [
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "Nii Gz",
                                            "_extension": "nii.gz",
                                            "_description": "Compressed Nifti"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "BETnii.gz_2.OutputFile",
                                "_name": "Output File",
                                "_description": "Specifies the output file.",
                                "_required": "true",
                                "_enabled": "true",
                                "_order": "1"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "Nii Gz",
                                            "_extension": "nii.gz",
                                            "_description": "Compressed Nifti"
                                        }
                                    },
                                    "transform": [
                                        {
                                            "_order": "0",
                                            "_operation": "Subtract",
                                            "__text": ".nii.gz"
                                        },
                                        {
                                            "_order": "1",
                                            "_operation": "Append",
                                            "__text": "_mask.nii.gz"
                                        }
                                    ],
                                    "_type": "File",
                                    "_cardinality": "1",
                                    "_transformationBase": "Output File"
                                },
                                "_id": "BETnii.gz_2.CreateBinaryMask",
                                "_name": "Create Binary Mask",
                                "_description": "Generates binary brain mask.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "3",
                                "_prefix": "-m ",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false",
                                "_includeTransformedParameter": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "Nii Gz",
                                            "_extension": "nii.gz",
                                            "_description": "Compressed Nifti"
                                        }
                                    },
                                    "transform": [
                                        {
                                            "_order": "0",
                                            "_operation": "Subtract",
                                            "__text": ".img"
                                        },
                                        {
                                            "_order": "1",
                                            "_operation": "Subtract",
                                            "__text": ".hdr"
                                        },
                                        {
                                            "_order": "2",
                                            "_operation": "Append",
                                            "__text": "_skull.img"
                                        }
                                    ],
                                    "_type": "File",
                                    "_cardinality": "1",
                                    "_transformationBase": "Output File"
                                },
                                "_id": "BETnii.gz_2.GenerateSkullImage",
                                "_name": "Generate Skull Image",
                                "_description": "Generates approximate skull image.",
                                "_required": "false",
                                "_enabled": "false",
                                "_order": "4",
                                "_prefix": "-s",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false",
                                "_includeTransformedParameter": "false"
                            }
                        ],
                        "executableAuthors": {
                            "author": [
                                {
                                    "_fullName": "Steve Smith",
                                    "_email": "steve@fmrib.ox.ac.uk",
                                    "_website": "http://www.fmrib.ox.ac.uk/Members/steve"
                                },
                                {
                                    "_fullName": "Mark Jenkinson",
                                    "_email": "mark@fmrib.ox.ac.uk",
                                    "_website": "http://users.fmrib.ox.ac.uk/~mark/ "
                                }
                            ]
                        },
                        "license": "http://www.fmrib.ox.ac.uk/fsl/fsl/licence.html\n\nLICENCE\n\nFMRIB Software Library, Release 4.1 (c) 2008, The University of Oxford\n(the \"Software\")\n\nThe Software remains the property of the University of Oxford (\"the\nUniversity\").\n\nThe Software is distributed \"AS IS\" under this Licence solely for\nnon-commercial use in the hope that it will be useful, but in order\nthat the University as a charitable foundation protects its assets for\nthe benefit of its educational and research purposes, the University\nmakes clear that no condition is made or to be implied, nor is any\nwarranty given or to be implied, as to the accuracy of the Software,\nor that it will be suitable for any particular purpose or for use\nunder any specific conditions. Furthermore, the University disclaims\nall responsibility for the use which is made of the Software. It\nfurther disclaims any liability for the outcomes arising from using\nthe Software.\n\nThe Licensee agrees to indemnify the University and hold the\nUniversity harmless from and against any and all claims, damages and\nliabilities asserted by third parties (including claims for\nnegligence) which arise directly or indirectly from the use of the\nSoftware or the sale of any products based on the Software.\n\nNo part of the Software may be reproduced, modified, transmitted or\ntransferred in any form or by any means, electronic or mechanical,\nwithout the express permission of the University. The permission of\nthe University is not required if the said reproduction, modification,\ntransmission or transference is done without financial return, the\nconditions of this Licence are imposed upon the receiver of the\nproduct, and all original and amended source code is included in any\ntransmitted product. You may be held legally responsible for any\ncopyright infringement that is caused or encouraged by your failure to\nabide by these terms and conditions.\n\nYou are not permitted under this Licence to use this Software\ncommercially. Use for which any financial return is received shall be\ndefined as commercial use, and includes (1) integration of all or part\nof the source code or the Software into a product for sale or license\nby or on behalf of Licensee to third parties or (2) use of the\nSoftware or any derivative of it for research with the final aim of\ndeveloping software products for sale or license to a third party or\n(3) use of the Software or any derivative of it for research with the\nfinal aim of developing non-software products for sale or license to a\nthird party, or (4) use of the Software to provide any service to an\nexternal organisation for which payment is received. If you are\ninterested in using the Software commercially, please contact Isis\nInnovation Limited (\"Isis\"), the technology transfer company of the\nUniversity, to negotiate a licence. Contact details are:\ninnovation@isis.ox.ac.uk quoting reference BS/3497.",
                        "_id": "BETnii.gz_2",
                        "_name": "BET (nii.gz)",
                        "_package": "FSL",
                        "_version": "4.1.4",
                        "_description": "BET (Brain Extraction Tool) deletes non-brain tissue from an image of the whole head. It can also estimate the external skull surface.",
                        "_icon": "0",
                        "_posX": "755",
                        "_posY": "179",
                        "_sourceCode": "",
                        "_location": "pipeline://cranium.loni.usc.edu/bet",
                        "_executableVersion": "4.1.4"
                    },
                    {
                        "input": [
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "File",
                                            "_extension": "",
                                            "_description": "Any type of data file"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "values": {
                                    "value": "pipeline://cranium.loni.usc.edu/smartline/Smartline.jar"
                                },
                                "_id": "smartline_FLIRTnii.gz_BETnii.gz_1.jarfile",
                                "_name": "jar file",
                                "_required": "false",
                                "_enabled": "true",
                                "_predefined": "true",
                                "_order": "0",
                                "_prefix": "-Djava.awt.headless=true -jar",
                                "_prefixSpaced": "true",
                                "_prefixAllArgs": "false"
                            },
                            {
                                "format": {
                                    "fileTypes": {
                                        "filetype": {
                                            "_name": "Nii Gz",
                                            "_extension": "nii.gz",
                                            "_description": "Compressed Nifti"
                                        }
                                    },
                                    "_type": "File",
                                    "_cardinality": "1"
                                },
                                "_id": "smartline_FLIRTnii.gz_BETnii.gz_1.smartlineinput",
                                "_name": "smartline input",
                                "_required": "true",
                                "_enabled": "true",
                                "_order": "1"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "1"
                                },
                                "values": {
                                    "value": "FSL"
                                },
                                "_id": "smartline_FLIRTnii.gz_BETnii.gz_1.softwarename",
                                "_name": "software name",
                                "_required": "false",
                                "_enabled": "true",
                                "_predefined": "true",
                                "_order": "2"
                            },
                            {
                                "format": {
                                    "_type": "String",
                                    "_cardinality": "1"
                                },
                                "values": {
                                    "value": "4.1.4"
                                },
                                "_id": "smartline_FLIRTnii.gz_BETnii.gz_1.softwareversion",
                                "_name": "software version",
                                "_required": "false",
                                "_enabled": "true",
                                "_predefined": "true",
                                "_order": "3"
                            }
                        ],
                        "output": {
                            "format": {
                                "fileTypes": {
                                    "filetype": {
                                        "need": "hdr",
                                        "_name": "Analyze Image",
                                        "_extension": "img",
                                        "_description": "Analyze Image file"
                                    }
                                },
                                "_type": "File",
                                "_cardinality": "1"
                            },
                            "_id": "smartline_FLIRTnii.gz_BETnii.gz_1.smartlineoutput",
                            "_name": "smartline output",
                            "_required": "false",
                            "_enabled": "true",
                            "_order": "4"
                        },
                        "_id": "smartline_FLIRTnii.gz_BETnii.gz_1",
                        "_name": "smartline_FLIRT (nii.gz)_BET (nii.gz)",
                        "_package": "Pipeline Utilities",
                        "_description": "Smartline conversion from type (nii.gz) of module FLIRT (nii.gz) to type (img,hdr) of module BET (nii.gz) of package FSL",
                        "_posX": "622",
                        "_posY": "216",
                        "_sourceCode": "",
                        "_location": "pipeline://cranium.loni.usc.edu/java",
                        "_gridVariables": "h_vmem=5.5",
                        "_smartModule": "true"
                    }
                ],
                "_id": "Untitled_1",
                "_name": "Untitled",
                "_posX": "0",
                "_posY": "0",
                "_sourceCode": ""
            },
            "_version": ".2"
        }
    }