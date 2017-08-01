
declare enum ReadyState {CONNECTING = 0, OPEN = 1, CLOSED = 2}

interface EventSourceConstructor {
  new(url: string, eventSourceInitDict?: EventSourceInit): EventSource;
  CONNECTING: ReadyState;
  OPEN: ReadyState;
  CLOSED: ReadyState;
}

interface EventSource extends EventTarget {
  url: string;
  readyState: ReadyState;
  listeners: Listeners 
  onopen: Function;
  onmessage: (event: OnMessageEvent) => void;
  onerror: Function;
  close: () => void;
}

interface Listeners {
  data: Listener;
}

interface Listener {
  [data: string]: Array<Function>
}

interface EventSourceInit {
  withCredentials?: boolean;
  headers?: Object;
}

interface OnMessageEvent {
  data: string;
}

declare var EventSource: EventSourceConstructor;

export default EventSource;
