interface Message {
    id: number;
    sender?: string;
    receiver?: string;
    message: string;
    date: Date;
}

const messages: Message[] = [
    {
        id: 1,
        sender: "sender A",
        message: "Hello, how are you?",
        date: new Date("2023-09-13T08:00:00")
    },
    {
        id: 2,
        receiver: "receiver A",
        message: "I'm good, thanks! How about you?",
        date: new Date("2023-09-13T08:05:00")
    },
    {
        id: 3,
        sender: "sender A",
        message: "I'm doing well too, thanks for asking!",
        date: new Date("2023-09-13T08:10:00")
    },
    {
        id: 4,
        receiver: "receiver A",
        message: "That's great to hear!",
        date: new Date("2023-09-13T08:15:00")
    },
    {
        id: 5,
        sender: "sender A",
        message: "By the way, did you get my email?",
        date: new Date("2023-09-13T08:20:00")
    },
    {
        id: 6,
        receiver: "receiver A",
        message: "Yes, I received it. I'll reply soon.",
        date: new Date("2023-09-13T08:25:00")
    },
    {
        id: 7,
        sender: "sender A",
        message: "Sounds good!",
        date: new Date("2023-09-13T08:30:00")
    },
    {
        id: 8,
        receiver: "receiver A",
        message: "Talk to you later!",
        date: new Date("2023-09-13T08:35:00")
    },
    {
        id: 9,
        sender: "sender A",
        message: "Goodbye!",
        date: new Date("2023-09-13T08:40:00")
    },
    {
        id: 10,
        receiver: "receiver A",
        message: "Take care!",
        date: new Date("2023-09-13T08:45:00")
    }
];

export default messages;
