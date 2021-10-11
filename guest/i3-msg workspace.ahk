#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

SwitchI3Workspace(wid) {
    host := "http://192.168.122.1:13999"
    req := host
    . "/i3/workspace"
    . "/"
    . wid

    whr := ComObjCreate("WinHttp.WinHttpRequest.5.1")
    whr.Open("POST", req)
    whr.Send()
    return
}

#1::SwitchI3Workspace("1")
#2::SwitchI3Workspace("2")
#3::SwitchI3Workspace("3")
#4::SwitchI3Workspace("4")
#5::SwitchI3Workspace("5")
#6::SwitchI3Workspace("6")
#7::SwitchI3Workspace("7")
#8::SwitchI3Workspace("8")
#9::SwitchI3Workspace("9")
#0::SwitchI3Workspace("10")