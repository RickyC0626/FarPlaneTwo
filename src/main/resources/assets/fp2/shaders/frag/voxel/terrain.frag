/*
 * Adapted from The MIT License (MIT)
 *
 * Copyright (c) 2020-$today.year DaPorkchop_
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
 * is furnished to do so, subject to the following conditions:
 *
 * Any persons and/or organizations using this software must include the above copyright notice and this permission notice,
 * provide sufficient credit to the original authors of the project (IE: DaPorkchop_), as well as provide a link to the original project.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

vec3 diffuseLightColors(vec3 normal) {
    //return min(normal.x * normal.x * .6 + normal.y * normal.y * ((3. + normal.y) / 4.) + normal.z * normal.z * .8, 1.);
    return normal * normal;
}

void main() {
    //TODO: i really need a good solution for this
    if (isChunkSectionRenderable(ivec3(fs_in.pos) >> 4))    {
        discard;
    }

    //initial block texture sample
    vec4 frag_color = fs_in.color;

    //shading
    //frag_color.rgb *= diffuseLight(normalVector());
    frag_color.rgb *= diffuseLightColors(normalVector());

    //fog
    //frag_color = addFog(frag_color);

    color = frag_color;
}
