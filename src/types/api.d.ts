type MinuteForecastResponse = {
    Link: string
    MobileLink: string
    Summaries: {
        CountMinute: number
        EndMinute: number
        MinuteText: string
        StartMinute: number
        Type: null
        TypeId: number
    }
    Summary: {
        Phrase: string
        Type: null
        TypeId: number
    }    
}