import { gsap } from "./greensock/all.js";

export class Level1 {
    setUp(e) {
        console.log("set up level")

        this.r11="-------------------------!-----------------------------------------------------------------------nnnnnnn----------------------------------------------------------------------------bxxxnxxxnnnxnnnbnnbnbbbbbb----------------------------m---------------------------------a------------------------------------------------------------!----------------n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv-----------"
        this.r10="---------------------------------------------------------------------------------!------------n-n-n-n-n-------------------------c---------------------------------------------------b----------------------b---------------------------------------------------------------------------------------------------------------------------------------n--------------------------!---------------------------!-----------------------------------------------!-------------------------------------------------!-------------------------------------------!----------------------------------------------------------------------v---------------------------v----------v------v-----"
        this.r9= "----------------------------------------c---------------n-------------------------------------------------------!----------------------------------n-n-n----------------n-----------b----------------------b--------------------------nnnnnnnnnn------------------m-----------------------n-----------------------n-n-n-n-n-n---------------------!--!--n----------n-------------------n---n--------------------------------------------------------------------------------------------------------------------------------x----@---x----------------------------------------------------------------------------------------v--------------!-----------!------------------v--------"
        this.r8= "--------------------------------------------------------n-------------------------------------bmbbbbbmbbbb--------------------------------------------------------------n----------bb----------------------nb------------------------xxxxxxxxxxx-----------------------------------bmbmb---------bmb-------------------------------n-------n------------------------n-------------------n---n--------------------------------------------------------------------------------------------------------------------------------xxxxxxxxxx----------------------------------------------------------------------------------------v---------------------------------------------v-------------------------"
        this.r7= "--------------------------------------------------------n---------------------------------n-----------------------------------------------------------------------------n------------------n-----n--nn------------------------------x-------------------------------------------------------------------k---,-------------------,-----------,-n--------------n--,--n----------------,--n---n--,-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------v---------------------------------------------v----------------------------------------"
        this.r6= "-------------------------n--------------------------------------------------------------------------------------------------c----c----c----------------------------------------n----------n-n----n--n-n----------------------------x---------------------------------------------------------------------uo-----uiiio-----uiiio----x-------x-----------------------------------------------------------------------------,------------------------------------------------------------------------------------------------------------------------------------------------------------------l-----------l-----l-----l-----l--------------------------------------------------v-----------------------------------------------------"
        this.r5= "-------------------------n-------c----bmbmb-----------bmcmb--------m-m-m-m---------------bmb-----------------------bcb-----------------------------x-g-x--------------bcbcb--------bb-----nnn----n--nn-----bb--------f------------x-------------------------------f-----------------k--k-x-----x-------uo--------------------------x-------x---xmm-----------cx----yyy----x-------x-----y------------xx--m--xx----------------,----------------------------------------------------------bmb-m-------------f---------------------------------------------f----------------------;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-+-------------------------------------------------vv----------------------------------------------------------"
        this.r4= "----------------------------o--------------------y----------------------------1-------------------------------------------------------------------xx---xx---------------------------b-----n-n----n--n-n----b--------xxx------------------------------------------xxx------------xxuiiiiiiox----uiiiiiio----------------------------uiiiiiiio---x--------------x-----------x-------x--------------x---xxx-----xxx---x-----uo---------------n--n--n--n--n--n--n--n--n--n--n--n-------------------------------xxx------------------------------------------xxx----------------------vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv--------------------------v----------v-*---------------x---------------------------------------"
        this.r3= "-------------------------n--o--------------------------------------------------------------------------------------------------------------------xxx---xxx--------------------------b-----n-n--nnn--n-n----b-------xxxxx----------------------------------------xxxxx----------xxx-------------------------------------------------------------x--------------x-----------uiiiiiiio-------------uiiiiiiiiiiiiiiiiiiio----------uo-------------------------------------------------------------------------xxxxx----------------------------------------xxxxx----n--n--n--n--n---vv----[h]---[h]---[h]---[h]---[h]---[h]---[h]--vvv------v------v------vvvvvvVVVVVVVVVVvvvvv------------xx--------------------------------------"
        this.r2= "--------m----------------n-i--------------;--k--p----------k--p-------k--k--p--------&-x----------k-k-k------x-&-x---------------l--l--l--------xxxx---xxxx---k-p-------------l-----b-k---l-k---l-k---l-k--b------xxxxxxx----------p-------p-------p-----------xxxxxxx--------xxxx-------------------------------------------------------------uiiiii-----iiiio----------------------------------------------------------------------uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiio----uiiiiiiiiiiiiio-----xxxxxxx--------------------------------------xxxxxxx------------------vvv-----d-----d-----d-----d-----d-----d-----d---vvvv~~~~vvv~~~~vvv~~~~vvh]--------------[hvvvvvvxxxxxxxxxx-----------------------------------------------------------------------"
        this.r1= "ggggggggggggggggggggggggggggggggggggggggggggggggguiiiiiiuiiiiiiogggggggggggggggggggggggggg(-$-)ggggggggggggggggggggg(-$-)gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg-----ggggggggggggggggggggggggggggggg--mgmg-----gmggmn---mmm---------m---------------------mmmmmmm-n----------------------nnnnn---------n-----------------------------------------------------------------------------------------------------------------ggggggggggggggggggggg-----xxx-----gggggggggggggggggggggggggggggggggggggvvvv-----d-----d-----d-----d-----d-----d-----d---vvvvvvvvvhvvvvvvhvvvvvvvd~~~~~~~~~~~~~~~~dvvvvv--------xxx------------------------------"

        this.allLevs = ["",this.r1,this.r2,this.r3,this.r4,this.r5,this.r6,this.r7,this.r8,this.r9,this.r10,this.r11];


        // this.r11="------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------bbbbbbbbbbbbbbbbbbbbbbbb--------------------------------------------------------------a------------------------------------------------------------!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------v--------------------------------------v-----------"
        // this.r10="-----------------------------------------------------------------------------------------------n-n-n-n-n-------------------------c--------------------------------------------------b----------------------b------------------------------------------------------------------------------------------------------------------------------------------------------------------!---------------------------!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------v--------------------------------------v-----"
        // this.r9= "----------------------------------------c---------------n------------------------------------------------------------------------------------------n-n-n----------------n-----------b----------------------b---------------------------x---@---x--------------------------------------------n-----------------------n-n-n-n-n-n---------------------!----!----------n-------------------n------------------------------------------------------------------------------------------------------------------------------------x----@---x----------------------------------------------------------------------------------------------v--------------------------------------v--------"
        // this.r8= "--------------------------------------------------------n-------------------------------------bbbbbbbbbbbb--------------------------------------------------------------n----------bb----------------------bb--------------------------xxxxxxxxx-----------------------------------bcbcb---------bmb-------------------------------n-------n------------------------n-------------------n------------------------------------------------------------------------------------------------------------------------------------xxxxxxxxxx----------------------------------------------------------------------------------------------v--------------------------------------v-------------------------"
        // this.r7= "--------------------------------------------------------n---------------------------------n-----------------------------------------------------------------------------n------------------n-----n--nn---------------------------------------------------------------------------------------------------k---,-------------------,-----------,-n--------------n--,--n----------------,--n------,-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------v--------------------------------------v----------------------------------------"
        // this.r6= "----------------------------------------------------------------------------------------------------------------------------c----c----c---------------------------------------------------n-n----n--n-n--------------------------------------------------------------------------------------------------uo-----uiiio-----uiiio----x-------x-----------------------------------------------------------------------------,--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------v-----------------------------------------------------"
        // this.r5= "---------------------------------c----bmbcb-----------bbcbb--------n-n-n-n---------------bmb-----------------------bcb-----------------------------x---x--------------bcbcb--------bb-----nnn--K-n--nn--K--bb--------f--------------------------------------------f-----------------k--k-x-----x-------uo--------------------------x-------x---xm------------cx----yyy----x-------x-----y---y---------xx--n--xx----------------,----------------------------------------------------------bmb---------------f--------------------------------------------f------------------------------------------------------------------------------------------------------------------v-----------------------------------------------------------"
        // this.r4= "--------------------------------------------------------------------------------------------------------------------------------------------------xx---xx---------------------------b-----n-n----n--n-n----b--------xxx------------------------------------------xxx------------xxuiiiiiio-----uiiiiiio----------------------------uiiiiiiio---x--------------x-----------x-------x--------------x---xxx-----xxx---x-----uo---------------n--n--n--n--n--n--n--n--n--n--n--n-------------------------------xxx------------------------------------------xxx----------------------vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv-------------------------------------------------x---------------------------------------"
        // this.r3= "-------------------------------------------------------------------------------------------------------------------------------------------------xxx---xxx--------------------------b-----n-n--nnn--n-n----b-------xxxxx----------------------------------------xxxxx----------xxx-------------------------------------------------------------x--------------x-----------uiiiiiiio-------------uiiiiiiiiiiiiiiiiiiio----------uo-------------------------------------------------------------------------xxxxx----------------------------------------xxxxx--------------------vv----[h]---[h]---[h]---[h]---[h]---[h]---[h]---[h]--v------------------------------------------------xx--------------------------------------"
        // this.r2= "---------------------------------------------k--p----------k--p-------k--k--p----------x----------k-k-k------x---x---------------l--l--l--------xxxx---xxxx---k-p-------------l-----b-k---l-k---l-k---l-k--b------xxxxxxx----------p-------p-------p-----------xxxxxxx--------xxxx-------------------------------------------------------------uiiiiiiiiiiiiiio----------------------------------------------------------------------uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiio----uiiiiiiiiiiiiio-----xxxxxxx--------------------------------------xxxxxxx------------------vvv-----d-----d-----d-----d-----d-----d-----d-----d---vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvxxxxxxxxxxx-----------------------------------------------------------------------"
        // this.r1= "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg---ggggggggggggggggggggggg---ggggggggggggggggggggggggggggggggggg---ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ggggggggggggggggggggg-----xxx-----gggggggggggggggggggggggggggggggggggggvvvv-----d-----d-----d-----d-----d-----d-----d-----d---v-----------------------------------------------xxx------------------------------"

        // this.allLevs = ["",this.r1,this.r2,this.r3,this.r4,this.r5,this.r6,this.r7,this.r8,this.r9,this.r10,this.r11];


    }

}
