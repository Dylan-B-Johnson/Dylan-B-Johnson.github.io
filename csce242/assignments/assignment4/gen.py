start_width =  1428
print("")
pdr = 14 
pdl = 14 
stop_width = 3840  
width = start_width;
print(f"@media only screen and (min-width: 600px) {{")
print(f"\t.pad {{\n\t\tpadding-right: {int(10)}px;")
print(f"\t\tpadding-left: {int(10)}px;")
print("\t}")
print("}")
print("")
while (width <= stop_width):
    print(f"@media only screen and (min-width:{width}px) {{")
    print(f"\t.pad {{\n\t\tpadding-right: {int(pdr)}px;")
    print(f"\t\tpadding-left: {int(pdl)}px;")
    print("\t}")
    print("}")
    width += 1
    pdr += 0.5
    pdl += 0.5
    print("")
