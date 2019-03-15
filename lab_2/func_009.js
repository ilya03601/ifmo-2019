const cc = (x = 0) => () => ++x;
a = cc();
a();
a();
a();