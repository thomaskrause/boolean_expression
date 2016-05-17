initSidebarItems({"constant":[["BDD_ONE","A special terminal `BDDFunc` which is constant `true` (one)."],["BDD_ZERO","A special terminal `BDDFunc` which is constant `false` (zero)."]],"struct":[["BDD","A `BDD` is a Binary Decision Diagram, an efficient way to represent a Boolean function in a canonical way. (It is actually a \"Reduced Ordered Binary Decision Diagram\", which gives it its canonicity assuming terminals are ordered consistently.)"],["PersistedBDD","A `PersistedBDD` is a wrapper around a `BDD` and a `BDDOutput` that tracks how much of the BDD has already been writen out, and writes out new nodes and labels as required when its `persist()` method is called."]],"trait":[["BDDOutput","The `BDDOutput` trait provides an interface to inform a listener about new BDD nodes that are created. It allows the user to persist a BDD to a stream (e.g., a log or trace file) as a long-running process executes. A `BDDOutput` instance may be provided to all BDD operations."]],"type":[["BDDFunc","A `BDDFunc` is a function index within a particular `BDD`. It must only be used with the `BDD` instance which produced it."]]});