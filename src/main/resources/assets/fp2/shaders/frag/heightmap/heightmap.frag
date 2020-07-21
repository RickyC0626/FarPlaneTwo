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

//
//
// TEXTURES
//
//

//textures
layout(binding = 0) uniform sampler2D terrain_texture;
layout(binding = 1) uniform sampler2D lightmap_texture;

//
//
// INPUTS
//
//

in VS_OUT {
    vec3 pos;
    vec2 light;

    flat vec4 color;
    flat int state;
    flat int cancel;
} fs_in;

//
//
// UTILITIES
//
//

vec3 normalVector() {
    vec3 fdx = dFdx(fs_in.pos);
    vec3 fdy = dFdy(fs_in.pos);
    return normalize(cross(fdx, fdy));
}

bool shouldCancel() {
    return fs_in.cancel != 0 || isChunkSectionRenderable(ivec3(floor(fs_in.pos)) >> 4);
}
