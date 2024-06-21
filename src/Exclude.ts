type Event = "scroll" | "click" | "mousemove";
type ExcludedEvent = Exclude<Event, "scroll">; //contains only click and mousemove

const handleEvent = (e: ExcludedEvent) => {
  console.log(`Handling Event : ${e}`);
};

handleEvent("click"); //OK
// handleEvent("scroll"); //NOT OK
